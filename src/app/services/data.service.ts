import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {observable, Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import { catchError } from "rxjs/operators";
import { AppError } from '../commun/app-error';
import { BadEdit } from '../commun/bad-edit';
import { BadInput } from '../commun/bad-input';
import { NotFoundError } from '../commun/not-found-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(@Inject(String)  private url : string , private http : HttpClient) { }

  getAll(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
      );
  }

  create(ressource : any){
    return this.http.post(this.url, ressource).pipe(
      catchError(this.handleError)
      );
    
    /* .pipe(
      catchError((error: Response)=>{

        if(error.status === 400){
          return throwError(() => new BadInput);
        }

          return throwError(() => new AppError);
          
      
      })
      ); */
  }

  update(ressource : any){
    return this.http.put(this.url + 122, ressource).pipe(
      catchError(this.handleError)
      );
  }

  delete(ressource : any){
    console.log(ressource)
    console.log(ressource.id)

    return this.http.delete(this.url  + ressource.id).pipe(
      catchError(this.handleError)
      );

  }


    private handleError(error : Response) {
      if(error.status === 404){
        return throwError(() => new NotFoundError);
      }

      if(error.status === 500){
        return throwError(() => new BadEdit);
      }

      if(error.status === 400){
        return throwError(() => new BadInput);
      }

        return throwError(() => new AppError);
    }



}
