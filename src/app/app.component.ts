import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APPTESTANGULAR';

  body = 'Lorem...dadaldalakdakakadkdkakdkakdaadkdaaddakakdkaddakad'

  post = {
    title: "kfkkfkfkf",
    isFavorite: true
  }

  onFavoriteChanged(isFavorit : any){
    console.log("Favorite changed ...", isFavorit)
  }


}
