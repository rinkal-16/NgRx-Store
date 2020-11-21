import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from '../app.state';
import * as TutorialActions from './../actions/tutorial.actions';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { createStore } from 'redux';
import combineReducers from '../reducers/index'; 

const store = createStore(combineReducers)
console.log(store.getState())
store.dispatch({
	type: 'ADD_TODO',
	text: 'Use Redux'
})
console.log(store.getState())

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {


@Input() todos;
	public updateForm = this.formBuilder.group({
	    id: new FormControl('', [Validators.required]),
	    name : new FormControl('', [Validators.required]),
	    email: new FormControl('', [Validators.required])
	});

	editEnable: boolean;
	showBool: boolean;
	tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
	this.showBool = true;
	this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  	this.showBool = true;
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  Edit(id) {
  	console.log(id);
  	this.editEnable = true;	
  }

	editTutorial(id: number) {
   	this.showBool = true;
   	this.store.dispatch(new TutorialActions.EditTutorial({id: this.updateForm.value.id,
   	 name: this.updateForm.value.name, email: this.updateForm.value.email}));
   }


  

}
