import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/propfile/Profile";
import {News} from "./components/news/News";
import {Music} from "./components/music/Music";
import {Settings} from "./components/settings/Settings";
import {Dialogs} from "./components/dialogs/Dialogs";
import {ActionsTypes} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";


type AppPropsType = {
    store: ReduxStoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
debugger
    const state = props.store.getState();

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile
                               profilePage={state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs dialogsPage={state.dialogsPage}
                                             dispatch={props.store.dispatch.bind(props.store)}/>}/>
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