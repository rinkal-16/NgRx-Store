import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorial.model';
import { AddTutorial, GetTutorial, RemoveTutorial } from '../actions/tutorial.actions';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  tutorialDatas: Observable<Array<Tutorial>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newTutorialData: Tutorial = {id:'', name:'', email:''}

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.tutorialDatas =  this.store.select(store => store.tutorial.list);
    this.loading$ = this.store.select(store => store.tutorial.loading);
    this.error$ = this.store.select(store => store.tutorial.error);
    this.store.dispatch(new GetTutorial());
  }

  addData() {
    this.newTutorialData.id = uuid();
    this.store.dispatch(new AddTutorial(this.newTutorialData));
    this.newTutorialData = {id:'', name:'', email:''};
  }

  deleteData(id: string) {
    this.store.dispatch(new RemoveTutorial(id));
  }

}
