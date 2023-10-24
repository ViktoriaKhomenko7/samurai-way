import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <Post/>
            <Post/>
        </div>
    );
};
