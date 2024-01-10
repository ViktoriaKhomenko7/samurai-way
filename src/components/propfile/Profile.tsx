import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/posts/MyPosts";
import {PostsDataType} from "./myPosts/posts/Post";

type ProfilePropsType = {
    posts: PostsDataType[]
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

