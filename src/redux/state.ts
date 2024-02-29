//actions const
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

//types
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

//actions type
export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateMessageActionType
export type AddPostActionType = ReturnType<typeof addPostAC>
// export type AddPostActionType = {
//     type: 'ADD-POST'
//     postText: string
// }
export type UpdateNewPostTextActionType = ReturnType<typeof changePostAC>
// export type UpdateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
export type UpdateMessageActionType = ReturnType<typeof changeMessageAC>
export type AddMessageActionType = ReturnType<typeof sendMessageAC>

//store
let store: StoreType = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Mila'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Alex'}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Yo"}
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: "hi, how are you?", likesCount: 20},
                {id: 2, message: "it's my first post", likesCount: 17}
            ],
            newPostText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; // паттерн наблюдатель
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            // this._addPost()
            const newPost: PostsType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages.push({id: 4, message: body})
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.body
            this._callSubscriber(this._state)
        }
    }
}

//functions action creator

//posts
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

//messages
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
export const changeMessageAC = (messageBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        body: messageBody
    } as const
}


// let rerenderEntireTree = (state: RootStateType)  => {
//     console.log('state was changed')
// }

// let state: RootStateType = {
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: 'Mila'},
//             {id: 2, name: 'Dima'},
//             {id: 3, name: 'Alex'}
//         ],
//         messages: [
//             {id: 1, message: "Hello"},
//             {id: 2, message: "How are you?"},
//             {id: 3, message: "Yo"}
//         ],
//     },
//     profilePage: {
//         posts: [
//             {id: 1, message: "hi, how are you?", likesCount: 20},
//             {id: 2, message: "it's my first post", likesCount: 17}
//         ],
//         newPostText: ''
//     },
//     sidebar: {
//
//     }
// }

// export const addPost = (postText: string) => {
//     const newPost: PostsType = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.unshift(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree(state)
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer: ()=>void) => {
//     //тут нельзя присваивать переменную (let, const,var), тк после отработки функции эта переменная умрет
//     //и когда будет вызов ф-ции в addPost и updateNewPostText - ничего не произойдет
//     rerenderEntireTree = observer; // паттерн наблюдатель
// }


export default store;