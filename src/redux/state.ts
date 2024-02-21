type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}

type dialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
type profilePageType = {
    posts: PostsType[]
}

type SidebarType = {

}

type RootStateType = {
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
        ]
    },
    sidebar: {

    }
}

export let addPost = (postMessage: any) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.unshift(newPost)
}


export default state;