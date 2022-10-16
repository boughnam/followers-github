import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  methods = [{id: 1 , name : 'email'} , {id: 2, name : 'phone'}, {id: 3 , name : 'mail'}];
  constructor() { }

  ngOnInit(): void {
  }

  log(firstName: any){
    console.log(firstName)
  }

  submit(f: any){
    console.log(f)
    console.log(f.value)
    console.log(f.value.contact.firstname)

  }

}
