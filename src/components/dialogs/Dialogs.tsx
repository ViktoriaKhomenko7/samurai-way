import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/store";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: ()=>void
    changeMessage: (messageBody: string)=>void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(
        m => <Message message={m.message}/>)

    let newMessageBody = state.newMessageText

    const onSendButtonClick = () => {
        props.sendMessage()
    }
    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let messageBody = e.currentTarget.value
        props.changeMessage(messageBody)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onChangeNewMessageText}
                                   placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendButtonClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};