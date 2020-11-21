import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tutorial } from '../models/tutorial.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private db_Url = "http://localhost:3000/tutorialData"

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Array<Tutorial>>(this.db_Url)
      .pipe(delay(500))
  }

  addData(tutorial: Tutorial) {
    return this.http.post(this.db_Url, tutorial)
      .pipe(delay(500))
  }

  deleteData(id: string) {
    return this.http.delete(`${this.db_Url}/${id}`)
      .pipe(delay(500))
  }
  
}
