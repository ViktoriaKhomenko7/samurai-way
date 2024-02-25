import React, {RefObject, useRef} from "react";
import {Post, PostsDataType} from "./Post";
import s from "./MyPosts.module.css"

export type MyPostsPropsType = {
    posts: PostsDataType[]
    addPost: (postText: string) => void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} id={1} likesCount={p.likesCount} message={p.message}/>)
    let newPostElement: RefObject<HTMLTextAreaElement>  = useRef(null)

    let onAddPost = () => {
        if (newPostElement.current) {
            let postText = newPostElement.current.value
            props.addPost(postText)
        }
    }
    let onPostChange = () => {
        if (newPostElement.current) {
            let newText: string = newPostElement.current.value
            props.updateNewPostText(newText)
        }
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}
                    />
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
