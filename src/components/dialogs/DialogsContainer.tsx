import React from 'react';
import {changeMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

export type DialogsContainerPropsType = {
    store: ReduxStoreType
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    let state = props.store.getState().dialogsPage
    const onSendButtonClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onChangeNewMessageText = (messageBody: string) => {
        props.store.dispatch(changeMessageAC(messageBody))
    }
    
    return (
        <Dialogs changeMessage={onChangeNewMessageText} sendMessage={onSendButtonClick} dialogsPage={state}/>
    );
};