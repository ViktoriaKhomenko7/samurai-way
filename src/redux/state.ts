import {rerenderEntireTree} from "../render";

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

export type dialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type profilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type SidebarType = {

}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
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
    },
    profilePage: {
        posts: [
            {id: 1, message: "hi, how are you?", likesCount: 20},
            {id: 2, message: "it's my first post", likesCount: 17}
        ],
        newPostText: 'it-kamasutra'
    },
    sidebar: {

    }
}

export let addPost = () => {
    let newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export default state;