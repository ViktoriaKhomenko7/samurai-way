import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/posts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts id={1} message={"blabla"} likesCount={20}/>
        </div>
    );
}

