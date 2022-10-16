import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  courses = ['Angular','JEE','React'];
  viewCourse = "Angular";

  courses2 : any;

  addCourse(){
    this.courses2.push({id: 6, title: "SYMFONY"});
  }

  deleteCourse(course : any){
    let index = this.courses2.indexOf(course);
    this.courses2.splice(index , 1);
  }

  editCourse(course : any){
    course.title ="UPDATE 1";
  }
  loadCourses(){
    this.courses2 = [
      {id: 1, title: "Laravel"},
      {id: 2, title: "JEE"},
      {id: 3, title: "ANGULAR"},
      {id: 4, title: "GIT"},
      {id: 5, title: "REACT"},
      {id: 6, title: "PHP"},
      {id: 7, title: "daaa"},
      {id: 8, title: "vvvv"},
    ]
  }

  trackCourse(index : any, course: any){
    return course ? course.id : undefined;
  }


}
