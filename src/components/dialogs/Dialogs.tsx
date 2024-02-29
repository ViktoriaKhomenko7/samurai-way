import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {
    ActionsTypes,
    changeMessageAC,
    DialogsPageType,
    sendMessageAC
} from "../../redux/state";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes)=>void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(
        d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.dialogsPage.messages.map(
        m => <Message message={m.message}/>)

    let newMessageBody = props.dialogsPage.newMessageText

    const onSendButtonClick = () => {
        props.dispatch(sendMessageAC())
    }
    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(changeMessageAC(body))
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
               <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onChangeNewMessageText} placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendButtonClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};