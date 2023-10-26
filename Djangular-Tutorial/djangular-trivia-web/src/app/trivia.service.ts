import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { QuestionArray } from './trivia';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http: HttpClient) { }

  getTrivia(): Observable<QuestionArray> {
    return this.http.get('http://localhost:8000/api/v1/questions') as Observable<QuestionArray>;
  }
}
