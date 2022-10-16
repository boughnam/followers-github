import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {


  @Input('isFavorite') isActive : boolean = false;

  @Output('change') click = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  course : any = {
    titre: 'Formation Compléte Sur Angular',
    avis: '4.9762',
    participants: 192,
    prix: 950.55,
    publicationDate: new Date(2017, 11, 21),

  }

 


  onClick(){
    this.isActive = !this.isActive;
    this.click.emit(this.isActive);

  }




}
