import {ActionsTypes} from "./store";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
let initialState = {
    dialogs: [
        {id: 1, name: 'Mila'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Alex'}
    ] as DialogType[],
    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ] as MessageType[],
    newMessageText: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: body}]
            }
        }
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.body
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