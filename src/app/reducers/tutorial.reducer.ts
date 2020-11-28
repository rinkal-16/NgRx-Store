import { createFeatureSelector, createSelector, Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model'
import { Actions, TutorialActionType } from './../actions/tutorial.actions'


const initialState: Tutorial = {     
     id: '1',
     name: 'Initial Tutorial',
     email: 'http://google.com'     
}

// export function reducer(state: Tutorial[] = [initialState], action: Actions) {
//      let index, active, list;
//      switch(action.type) {
//           case TutorialActionType.ADD_TUTORIAL:
//                return [...state, action.payload];
//           case TutorialActionType.GET_TUTORIAL:
//                let id: number = (action.payload);
//                return state;     
//           case TutorialActionType.REMOVE_TUTORIAL:                
//                const array = [...state];
//                array.splice(action.payload, 1);
//                return array;  
//           case TutorialActionType.EDIT_TUTORIAL:
//                const index = state.findIndex(item => item.id == action.payload.id);
//                list = [...state];               
//                list[index] = action.payload;
//                console.log(list[index], action.payload);
//                console.log(Object.assign({}, state, { list }));
//                return list;               
//           case TutorialActionType.RESET_TUTORIAL:
//                return initialState;     
//           default:
//                return [...state];

//      }
// }


//Service Effect
export interface TutorialState {
     [x: string]: any;
     list: Tutorial[],
     loading: boolean,
     error: Error
}

const intState: TutorialState = {
     list: [],
     loading: false,
     error: undefined
};

const newState = (state, newData) => {
     return Object.assign({}, state, newData)
}

export function reducerEffect(state: TutorialState = intState, action: Actions): any {
     let index, active, list;
     switch(action.type) {
          case TutorialActionType.ADD_TUTORIAL:
               return {...state, loading: true}
          case TutorialActionType.ADD_TUTORIAL_SUCCESS:
               return {...state, loading: false, list: [...state.list, action.payload]}
          case TutorialActionType.ADD_TUTORIAL_FAILURE:
               return {...state, loading: false, error: action.payload}               


          case TutorialActionType.GET_TUTORIAL:
               //let id: number = (action.payload);
               return {...state, loading: true}; 
          case TutorialActionType.GET_TUTORIAL_SUCCESS:              
               return {...state, loading: false, list: action.payload}; 
          case TutorialActionType.GET_TUTORIAL_FAILURE:              
               return {...state, loading: false, error: action.payload};     
               
               
          case TutorialActionType.REMOVE_TUTORIAL:                
               return {...state, loading: true}
          case TutorialActionType.REMOVE_TUTORIAL_SUCCESS:
               return {...state, list: state.list.filter(item => item.id !== action.payload), loading: false}    
          case TutorialActionType.REMOVE_TUTORIAL_FAILURE:
               return {...state, error: action.payload, loading: false}   
               
          case TutorialActionType.EDIT_TUTORIAL:
               const index = state.findIndex(item => item.id == action.payload.id);
               list = {...state};               
               list[index] = action.payload;
               console.log(list[index], action.payload);
               console.log(Object.assign({}, state, { list }));
               return list; 
          case TutorialActionType.EDIT_TUTORIAL_SUCCESS:
               return {...state, loading: false, list: [...state.list, action.payload]}
          case TutorialActionType.EDIT_TUTORIAL_FAILURE:
               return {...state, loading: false, error: action.payload}           

          default:
               return {...state};

     }
}




