import {combineReducers,  createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export type ReduxStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>


let store = createStore(rootReducer);


export default store;