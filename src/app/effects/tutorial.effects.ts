import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoServiceService } from '../services/todo-service.service';
import { TutorialActionType, GetTutorial, GetTutorialSuccess, GetTutorialFailure, AddTutorial, AddTutorialSuccess, AddTutorialFailure, RemoveTutorial, RemoveTutorialSuccess, RemoveTutorialFailure, EditTutorial, EditTutorialSuccess, EditTutorialFailure } from '../actions/tutorial.actions';

@Injectable()
export class TutorialEffects {

     constructor(private action$: Actions, private tutorialService: TodoServiceService) { }

     @Effect() getTutorial$ = this.action$
          .pipe(
               ofType<GetTutorial>(TutorialActionType.GET_TUTORIAL), 
               mergeMap(
                   () => this.tutorialService.getData()
                    .pipe(
                         map(data => {
                              return new GetTutorialSuccess(data)
                         }),
                         catchError(error => of(new GetTutorialFailure(error)))
                    ) 
               )
          )

     @Effect() addTutorial$ = this.action$
          .pipe(
               ofType<AddTutorial>(TutorialActionType.ADD_TUTORIAL), 
               mergeMap(
                   (data) => this.tutorialService.addData(data.payload)
                    .pipe(
                         map(() => new AddTutorialSuccess(data.payload)),                                                     
                         catchError(error => of(new AddTutorialFailure(error)))
                    ) 
               )
          ) 
          
     @Effect() deleteTutorial$ = this.action$
          .pipe(
               ofType<RemoveTutorial>(TutorialActionType.REMOVE_TUTORIAL), 
               mergeMap(
                   (data) => this.tutorialService.deleteData(data.payload)
                    .pipe(
                         map(() =>  new RemoveTutorialSuccess(data.payload)),
                         catchError(error => of(new RemoveTutorialFailure(error)))
                    ) 
               )
          )  
          
     @Effect() editTutorial$ = this.action$
          .pipe(
               ofType<EditTutorial>(TutorialActionType.EDIT_TUTORIAL),
               mergeMap(
                    (data) => this.tutorialService.editData(data.payload)
                    .pipe(
                         map(() => new EditTutorialSuccess(data.payload)),
                         catchError(error => of(new EditTutorialFailure(error)))
                    )
               )
          )
}