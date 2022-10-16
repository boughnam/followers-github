import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "La liste de mes cours"
  courses:any;
  isActive = true;

  constructor(emailService : EmailService) { 
      
  }


  ngOnInit(): void {
  }

  onClick($event : any){
    $event.stopPropagation(); 
    console.log('button clicked',$event)
  }

  onClickDiv(){
    console.log('Div is clicked')
  }

  onKeyUp(email: any){
    
      console.log('onKeyUp ')
      console.log('value :  ',email.value)

  }

  onKeyUpE(){
    
    console.log('onKeyUp ESHAP ')
  }

  varemail: string = "mm@gmail.com";

  onKeyUp2(){
    
    console.log(this.varemail)
  }


}
