import { Component, OnInit } from '@angular/core';
import { AppError } from '../commun/app-error';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'github-folowers',
  templateUrl: './github-folowers.component.html',
  styleUrls: ['./github-folowers.component.css']
})
export class GithubFolowersComponent implements OnInit {

  followers : any;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.getFollowers();
  }

  getFollowers(){
    this.githubService.getAll()
    .subscribe({  
       next: (response)=> {
        console.log(response);
          this.followers = response;
        },
      error: (error: AppError) => {
        alert('erreur inattendu');
        console.log(error)
       }
  })
}




}
