import React, {useRef} from "react";
import {Post, PostsDataType} from "./Post";
import s from "./MyPosts.module.css"

export type MyPostsPropsType = {
    posts: PostsDataType[]
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string)=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post id={1} likesCount={p.likesCount} message={p.message}/>)
    let newPostElement = useRef<HTMLTextAreaElement>(null)

    let onAddPost = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.addPost()
        }
    }
    let onPostChange = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
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
