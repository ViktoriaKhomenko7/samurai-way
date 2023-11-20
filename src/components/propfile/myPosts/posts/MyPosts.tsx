import React from "react";
import {Post} from "./Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                New post
            </div>
            <div className={s.posts}>
                <Post likesCount={20} message="hi, how are you?"/>
                <Post likesCount={17} message="it's my first post"/>
            </div>
        </div>
    );
};
