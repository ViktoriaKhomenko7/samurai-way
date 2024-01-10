import React from "react";
import {Post, PostsDataType} from "./Post";
import s from "./MyPosts.module.css"

export type MyPostsPropsType = {
    posts: PostsDataType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post id={1} likesCount={p.likesCount} message={p.message}/>)

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
