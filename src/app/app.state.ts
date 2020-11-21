import { Tutorial } from './models/tutorial.model';
import { TutorialState } from '../app/reducers/tutorial.reducer';

export interface AppState {
     // readonly tutorial: Tutorial[];
     readonly tutorial: TutorialState
}