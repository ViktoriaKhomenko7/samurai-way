import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogPropsType) => {

    let path = "/dialogs/" + props.id
    return (
        <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
    )
}
type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Mila'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Masha'}
    ]
    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages.map(m => <Message message={m.message}/>)

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