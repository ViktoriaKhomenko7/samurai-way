import {ActionsTypes, DialogsPageType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState: DialogsPageType

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


export default dialogsReducer