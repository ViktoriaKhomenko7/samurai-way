import {ActionsTypes, DialogsPageType} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState: DialogsPageType = {
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
}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: 4, message: body})
            return state
        }
        case UPDATE_NEW_MESSAGE: {
            state.newMessageText = action.body
            return state
        }
        default:
            return state

    }
}

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

export default dialogsReducer