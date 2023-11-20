import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Mila"} id='1'/>
                <DialogItem name={"Dima"} id='2'/>
                <DialogItem name={"Alex"} id='3'/>
                <DialogItem name={"Sasha"} id='4'/>
                <DialogItem name={"Masha"} id='5'/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hello"/>
                <Message message="How are you"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};