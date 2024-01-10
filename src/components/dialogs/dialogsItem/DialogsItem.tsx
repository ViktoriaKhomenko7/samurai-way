import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

export type DialogsItemPropsType = {
    id: number
    name: string
}
export const DialogItem: React.FC<DialogsItemPropsType> = (props) => {

    let path = "/dialogs/" + props.id
    return (
        <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
    )
}