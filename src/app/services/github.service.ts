import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DataService {


  constructor( http : HttpClient) {
    super('https://api.github.com/users/idbrahimdev/followers',http);
   }

  }
