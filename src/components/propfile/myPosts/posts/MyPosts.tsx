import React from "react";
import {Post} from "./Post";
import s from "./MyPosts.module.css"

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export const MyPosts: React.FC<PostsDataType> = () => {

    let posts = [
        {id: 1, message: "hi, how are you?", likesCount: 20},
        {id: 2, message: "it's my first post", likesCount: 17}
    ]
    let postsElements = posts.map(p => <Post id={1} likesCount={p.likesCount} message={p.message}/>)

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
                {postsElements}
            </div>
        </div>
    );
};
