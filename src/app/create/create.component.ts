import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Tutorial } from './../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public tutorialModel: Observable<Tutorial>;

  @Input() read;

  public addForm = this.formBuilder.group({
    id: new FormControl('', [Validators.required]),
    name : new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });
  
  
  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {   
  }

  ngOnInit(): void {   
  }

  addTutorial() {
    console.log(this.addForm.value);
    this.store.dispatch(new TutorialActions.AddTutorial({id: this.addForm.value.id, name: this.addForm.value.name, email: this.addForm.value.email}));
    this.addForm.reset();
  }

  

}
