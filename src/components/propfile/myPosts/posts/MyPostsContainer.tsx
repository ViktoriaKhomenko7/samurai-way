import React from "react";
import {addPostAC, changePostAC, PostsType} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

// export const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = store.getState()
//                     const onAddPost = () => {
//                         store.dispatch(addPostAC(state.profilePage.newPostText))
//                     }
//                     const onPostChange = (text: string) => {
//                         store.dispatch(changePostAC(text))
//                     }
//
//                     return (
//                         <MyPosts newPostText={store.getState().profilePage.newPostText}
//                                  posts={store.getState().profilePage.posts}
//                                  addPost={onAddPost}
//                                  updateNewPostText={onPostChange}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };


export type MyPostsContainerPropsType = MapStatePropsType & mapDispatchToPropsType

type MapStatePropsType = {
    posts: PostsType[]
    newPostText: string
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))

        },
        updateNewPostText: (text: string) => {
            dispatch(changePostAC(text))
        },
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


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