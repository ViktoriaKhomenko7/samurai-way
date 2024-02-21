import React, {useRef} from "react";
import {Post, PostsDataType} from "./Post";
import s from "./MyPosts.module.css"

export type MyPostsPropsType = {
    posts: PostsDataType[]
    addPost: (postMessage: string)=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post id={1} likesCount={p.likesCount} message={p.message}/>)
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    // let newPost =
    // let onAddPost = () => {
    //     props.addPost(newPostElement.current?.value)
    //     newPostElement.current?.value = '';
    // }
    //ИЛИ ТАК:
        const onAddPost = () => {
            if (newPostElement.current !== null) {
                props.addPost(newPostElement.current.value)
                newPostElement.current.value = ''
            }
        }

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
