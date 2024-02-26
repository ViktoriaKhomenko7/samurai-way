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
import {RootStateType} from "./redux/state";
import store from "./redux/state";


type AppPropsType = {
    state: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

const App = (props: AppPropsType) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className={"app-wrapper-content"}>
                <Routes>
                    <Route path="/profile/*"
                           element={<Profile
                               profilePage={props.state.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           />}/>
                    <Route path="/dialogs/*"
                           element={<Dialogs
                               dialogs={store._state.dialogsPage.dialogs}
                               messages={store._state.dialogsPage.messages}/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
