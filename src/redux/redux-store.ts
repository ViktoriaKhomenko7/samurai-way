import {combineReducers,  createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let rootReducer = combineReducers({
    //profilePage: profileReducer,
    //dialogsPage: dialogsReducer под капотом такая запись, тк
    //это объект, а в объекте ключ: значение
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});


let store = createStore(rootReducer);


export type ReduxStoreType = typeof store
//export type AppStateType = ReturnType<typeof rootReducer>

export default store;