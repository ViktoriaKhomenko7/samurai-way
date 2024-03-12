import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/propfile/Profile";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {ActionsTypes} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/dialogs/DialogsContainer";


type AppPropsType = {
    // store: ReduxStoreType
    // dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile/>}/>
                    <Route path="/dialogs/*"
                           element={<DialogsContainer/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

//bind связывает диспатч со стором (слева с тем что справа)



//import React from 'react';
// import './App.css';
// import {Routes, Route} from "react-router-dom";
// import {Header} from "./components/header/Header";
// import {Navbar} from "./components/navbar/Navbar";
// import {Profile} from "./components/propfile/Profile";
// import {News} from "./components/news/News";
// import {Music} from "./components/music/Music";
// import {Settings} from "./components/settings/Settings";
// import {ActionsTypes} from "./redux/store";
// import {ReduxStoreType} from "./redux/redux-store";
// import {DialogsContainer} from "./components/dialogs/DialogsContainer";
//
//
// type AppPropsType = {
//     // store: ReduxStoreType
//     // dispatch: (action: ActionsTypes) => void
// }
//
// const App: React.FC<AppPropsType> = (props) => {
//
//     return (
//         <div className="app-wrapper">
//             <Header/>
//             <Navbar/>
//             <div className={"app-wrapper-content"}>
//                 <Routes>
//                     <Route path="/profile/*"
//                            element={<Profile store={props.store}/>}/>
//                     <Route path="/dialogs/*"
//                            element={<DialogsContainer store={props.store}/>}/>
//                     <Route path="/news/*" element={<News/>}/>
//                     <Route path="/music/*" element={<Music/>}/>
//                     <Route path="/settings/*" element={<Settings/>}/>
//                 </Routes>
//             </div>
//         </div>
//     );
// }
//
// export default App;
//
// //bind связывает диспатч со стором (слева с тем что справа)