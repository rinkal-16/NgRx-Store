import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';

export enum TutorialActionType {
     GET_TUTORIAL = '[TUTORIAL] Get',
     GET_TUTORIAL_SUCCESS = '[TUTORIAL] Get Success',
     GET_TUTORIAL_FAILURE = '[TUTORIAL] Get Failure',

     ADD_TUTORIAL = '[TUTORIAL] Add',
     ADD_TUTORIAL_SUCCESS = '[TUTORIAL] Add Success',
     ADD_TUTORIAL_FAILURE = '[TUTORIAL] Add Failure',

     REMOVE_TUTORIAL = '[TUTORIAL] Remove',
     REMOVE_TUTORIAL_SUCCESS = '[TUTORIAL] Remove Success',
     REMOVE_TUTORIAL_FAILURE = '[TUTORIAL] Remove Failure',

     EDIT_TUTORIAL = '[TUTORIAL] Edit',
     EDIT_TUTORIAL_SUCCESS = '[TUTORIAL] Edit Success',
     EDIT_TUTORIAL_FAILURE = '[TUTORIAL] Edit Failure',

     RESET_TUTORIAL = '[TUTORIAL] Reset'
}



export class AddTutorial implements Action {
     readonly type = TutorialActionType.ADD_TUTORIAL
     constructor(public payload: Tutorial) { }
}
export class AddTutorialSuccess implements Action {
     readonly type = TutorialActionType.ADD_TUTORIAL_SUCCESS
     constructor(public payload: Tutorial) { }
}
export class AddTutorialFailure implements Action {
     readonly type = TutorialActionType.ADD_TUTORIAL_FAILURE
     constructor(public payload: Error) { }
}

export class GetTutorial implements Action {
     readonly type = TutorialActionType.GET_TUTORIAL;
     //constructor(public payload: string) { }
}
export class GetTutorialSuccess implements Action {
     readonly type = TutorialActionType.GET_TUTORIAL_SUCCESS   
     constructor(public payload: Array<Tutorial>) {}  
}
export class GetTutorialFailure implements Action {
     readonly type = TutorialActionType.GET_TUTORIAL_FAILURE
     constructor(public payload: Error) {}
}

export class RemoveTutorial implements Action {
     readonly type = TutorialActionType.REMOVE_TUTORIAL 
     constructor(public payload: string) {}
}
export class RemoveTutorialSuccess implements Action {
     readonly type = TutorialActionType.REMOVE_TUTORIAL_SUCCESS 
     constructor(public payload: string) {}
}
export class RemoveTutorialFailure implements Action {
     readonly type = TutorialActionType.REMOVE_TUTORIAL_FAILURE 
     constructor(public payload: string) {}
}

export class EditTutorial implements Action {
     readonly type = TutorialActionType.EDIT_TUTORIAL 
     constructor(public payload: Tutorial) {}
}
export class EditTutorialSuccess implements Action {
     readonly type = TutorialActionType.EDIT_TUTORIAL_SUCCESS 
     constructor(public payload: Tutorial) {}
}
export class EditTutorialFailure implements Action {
     readonly type = TutorialActionType.EDIT_TUTORIAL_FAILURE 
     constructor(public payload: Tutorial) {}
}

export class ResetTutorial implements Action {
     readonly type = TutorialActionType.RESET_TUTORIAL 
     constructor(public payload: Tutorial) {}
}

export type Actions = AddTutorial | AddTutorialSuccess | AddTutorialFailure | RemoveTutorial | RemoveTutorialSuccess | RemoveTutorialFailure | EditTutorial | ResetTutorial | GetTutorial | GetTutorialSuccess | GetTutorialFailure | EditTutorial | EditTutorialSuccess | EditTutorialFailure