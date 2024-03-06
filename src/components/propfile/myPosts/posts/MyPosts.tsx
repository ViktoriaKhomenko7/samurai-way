import React, {RefObject, useRef} from "react";
import {Post, PostsDataType} from "./Post";
import s from "./MyPosts.module.css"

export type MyPostsPropsType = {
    posts: PostsDataType[]
    newPostText: string
    updateNewPostText: (postText: string)=> void
    addPost: ()=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} id={1} likesCount={p.likesCount} message={p.message}/>)
    let newPostElement: RefObject<HTMLTextAreaElement> = useRef(null)

    const onAddPost = () => {
        if (newPostElement.current) {
            //let postText = newPostElement.current.value
            //props.dispatch(addPostAC(props.newPostText))
            props.addPost()
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let postText: string = newPostElement.current.value
            //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
            //props.dispatch(changePostAC(text))
            props.updateNewPostText(postText)
        }
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}/>
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
