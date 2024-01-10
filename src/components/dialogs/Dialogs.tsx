import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem, DialogsItemPropsType} from "./dialogsItem/DialogsItem";
import {Message, MessagePropsType} from "./message/Message";

export type DialogsPropsType = {
    dialogs: DialogsItemPropsType[]
    messages: MessagePropsType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};