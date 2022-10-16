import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { AppError } from '../commun/app-error';
import { BadEdit } from '../commun/bad-edit';
import { BadInput } from '../commun/bad-input';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  res : any;
  mode : any = "add";

  posts : any = [];

  post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  }

  constructor(private postService: PostService) { 
   

  }
  
  getPosts(){
    this.postService.getAll()
    .subscribe(response => {
      this.posts = response;
      console.log(this.posts)
    },error =>{
      alert('erreur inattendu');
      console.log(error)
    })
  }

  initialisePost(){
    this.post = {
      id: 0,
      title: '',
      body: '',
      userId: 0
    }
  }

  ngOnInit(): void {
    this.getPosts();
  }

  

  creatPost(){

    this.postService.create(this.post)
    .subscribe(response => {
      console.log(response);
      this.res = response;
      console.log(this.res.id);

      this.post.id = this.res.id; // not obligatoire
      this.posts.unshift(this.post);
      this.initialisePost();
    },(error: AppError ) =>{
      if(error instanceof BadInput){
      alert('merci de vérifier vos informations '); //bad request
      console.log(error)
      } else {
      alert('erreur inattendu');
      console.log(error)
      }
  })

  }

  editPost(post : any){
      this.post = post;
      this.mode = "update";
  }

  updatePost(){
    this.postService.update(this.post)
    .subscribe(() => {
     
      this.initialisePost();
      this.mode = "add";
    },(error: AppError ) =>{
      
     /*  if(error.status === 400){
        alert('erreur 400 '); //id inéxistant
        console.log(error)
        } else  if(error.status === 404){
          alert('erreur 404 '); //id inéxistant
          console.log(error)
          }else */  if(error instanceof BadEdit){
            alert('erreur 500 '); //id inéxistant
            console.log(error)
            }
            else {
        alert('erreur inattendu');
        console.log(error)
        }
      
  })
  }

  deletePost(post:any){
    this.postService.delete(post)
    .subscribe({
      next: (response)=> {
        console.log("delete");
       console.log(response);

        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
      },
      error: (error: AppError) => {
        if(error instanceof NotFoundError){
        alert('Ce post est deja supprimé '); //id inéxistant
        console.log(error)
        } else {
        alert('erreur inattendu');
        console.log(error)
        }
    }
    })
    /* .subscribe(response => {
      console.log(response);
     
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    },(error: Response) => {
        if(error.status === 404){
        alert('Ce post est deja supprimé '); //id inéxistant
        console.log(error)
        } else {
        alert('erreur inattendu');
        console.log(error)
        }
    }) */
  }



}
