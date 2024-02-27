import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/posts/MyPosts";
import {ActionsTypes, profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes)=>void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

