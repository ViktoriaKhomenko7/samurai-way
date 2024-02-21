import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPosts} from "./myPosts/posts/MyPosts";
import {PostsDataType} from "./myPosts/posts/Post";
import {PostsType} from "../../redux/state";

type ProfilePropsType = {
    posts: PostsDataType[]
    addPost: (postMessage: string)=>void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    );
}

