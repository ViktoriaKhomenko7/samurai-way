import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

// export type ProfilePageType = {
//     posts: PostsType[]
//     newPostText: string
// }
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    posts: [
        {id: 1, message: "hi, how are you?", likesCount: 20},
        {id: 2, message: "it's my first post", likesCount: 17}
    ] as PostsType[],
    newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state,
                posts: [...state.posts]
            }
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changePostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer