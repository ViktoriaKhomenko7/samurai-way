import React, {useRef} from "react";
import {Post, PostsDataType} from "./Post";
import s from "./MyPosts.module.css"

export type MyPostsPropsType = {
    posts: PostsDataType[]
    addPost: (postMessage: any)=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post id={1} likesCount={p.likesCount} message={p.message}/>)
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    let newPost = newPostElement.current?.value
    let onAddPost = () => {
        props.addPost(newPost)
    }
    //ИЛИ ТАК:
    //let newPostEl = useRef<HTMLTextAreaElement>(null)
    //
    //     const addPost = () => {
    //         if (newPostEl.current !== null) {
    //             alert(newPostEl.current.value)
    //         }
    //     }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
