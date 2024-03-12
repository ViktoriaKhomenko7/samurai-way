import React from "react";
import {addPostAC, changePostAC,} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReduxStoreType} from "../../../../redux/redux-store";
import {StoreContext} from "../../../../StoreContext";
import {StoreType} from "../../../../redux/store";

export type MyPostsContainerPropsType = {
    // store: ReduxStoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState()
                    const onAddPost = () => {
                        store.dispatch(addPostAC(state.profilePage.newPostText))
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(changePostAC(text))
                    }

                    return (
                        <MyPosts newPostText={store.getState().profilePage.newPostText}
                                 posts={store.getState().profilePage.posts}
                                 addPost={onAddPost}
                                 updateNewPostText={onPostChange}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
};


//import React from "react";
// import {addPostAC, changePostAC,} from "../../../../redux/profile-reducer";
// import {MyPosts} from "./MyPosts";
// import {ReduxStoreType} from "../../../../redux/redux-store";
//
// export type MyPostsContainerPropsType = {
//     store: ReduxStoreType
// }
//
// export const MyPostsContainer: React.FC<MyPostsContainerPropsType> = (props) => {
//
//     let state = props.store.getState()
//
//     const onAddPost = () => {
//         props.store.dispatch(addPostAC(state.profilePage.newPostText))
//     }
//     const onPostChange = (text: string) => {
//         props.store.dispatch(changePostAC(text))
//     }
//
//     return (
//         <MyPosts newPostText={state.profilePage.newPostText}
//                  posts={state.profilePage.posts}
//                  addPost={onAddPost}
//                  updateNewPostText={onPostChange}/>
//     );
// };