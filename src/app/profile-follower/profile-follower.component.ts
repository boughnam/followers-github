import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {

  id: number = 0;
  username : string = '';
  page: number = 0;
  type : string = '';
  var1 : string = '';

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.username = this.route.snapshot.paramMap.get('username')!;

    this.page = +this.route.snapshot.queryParamMap.get('page')!;
    this.type = this.route.snapshot.queryParamMap.get('type')!;
    this.var1 = this.route.snapshot.queryParamMap.get('var')!;

   /*  this.route.paramMap.subscribe(paramas =>{
        console.log(paramas);
        console.log(paramas.get('username'));
      this.id = +paramas.get('id')!;
      this.username = paramas.get('username')!;

    })

  this.route.queryParamMap.subscribe(queryParamas =>{
        console.log(queryParamas);
        console.log(queryParamas.get('var'));
      this.page = +queryParamas.get('page')!;
      this.type = queryParamas.get('type')!;
      this.var1 = queryParamas.get('var')!;
    })
 */

  }

}
