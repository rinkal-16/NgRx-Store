import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorial.model';
import { AddTutorial, GetTutorial, RemoveTutorial, EditTutorial } from '../actions/tutorial.actions';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import * as TutorialActions from './../actions/tutorial.actions';

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

  public updateForm = this.formBuilder.group({
    id: new FormControl('', [Validators.required]),
    name : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
});

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) { }

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

  editData() {
    this.store.dispatch(new EditTutorial(this.newTutorialData));
    // this.newTutorialData = {id:'', name:'', email:''};
    // console.log(this.newTutorialData);
    this.store.dispatch(new TutorialActions.EditTutorial({id: this.updateForm.value.id,
   	 name: this.updateForm.value.name, email: this.updateForm.value.email}));
  }

}
