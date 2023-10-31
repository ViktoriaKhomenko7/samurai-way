import React from "react";
import {Post} from "./Post";

// type MyPostsPropsType = {
//
// }

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                New post
            </div>
            <Post countLikes={20} message="hi, how are you?"/>
            <Post countLikes={17} message="it's my first post"/>
        </div>
    );
};
