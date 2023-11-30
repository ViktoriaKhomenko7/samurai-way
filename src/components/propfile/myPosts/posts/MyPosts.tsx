import React from "react";
import {Post} from "./Post";
import s from "./MyPosts.module.css"

export type postsDataType = {
    id: number
    message: string
    likesCount: number
}
export const MyPosts = () => {

    let postsData = [
        {id: 1, message: "hi, how are you?", likesCount: 20},
        {id: 2, message: "it's my first post", likesCount: 17}
    ]

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
                <Post id={1} likesCount={postsData[0].likesCount} message={postsData[0].message}/>
                <Post id={2} likesCount={postsData[1].likesCount} message={postsData[1].message}/>
            </div>
        </div>
    );
};
