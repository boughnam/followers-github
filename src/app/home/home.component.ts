import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  title = 'APPTESTANGULAR';

  body = 'Lorem...dadaldalakdakakadkdkakdkakdaadkdaaddakakdkaddakad'

  post = {
    title: "kfkkfkfkf",
    isFavorite: true
  }

  onFavoriteChanged(isFavorit : any){
    console.log("Favorite changed ...", isFavorit)
  }

  Ajouter(){
      //Simple routage navigate redirect
    /* this.route.navigate(['followers']); */

    this.route.navigate(['followers', 12, 'IDBRAHIMDEV'],{
      queryParams: {page: 12, type: 'Admin' , var: 'valeur2'}
    });
  }

}
