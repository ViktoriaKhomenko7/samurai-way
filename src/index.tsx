import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store, {AppStateType} from "./redux/redux-store"
import {StoreContext} from "./StoreContext";
import {StoreType} from "./redux/store";

let rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})


//import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {BrowserRouter} from "react-router-dom";
// import store from "./redux/redux-store"
//
// let rerenderEntireTree = () => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App store={store}
//                  dispatch={store.dispatch.bind(store)}/>
//         </BrowserRouter>,
//         document.getElementById('root')
//     );
// }
// rerenderEntireTree()
//
// store.subscribe(()=>{
//     //let state = store.getState()
//     rerenderEntireTree()
// })