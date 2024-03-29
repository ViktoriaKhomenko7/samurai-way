import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store"
import {Provider} from "react-redux";

// let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }
// rerenderEntireTree()

// store.subscribe(() => {
//     rerenderEntireTree()
// })


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