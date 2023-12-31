import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

type DialogItemPropsType = {
    name: string
    id: number
}
export const DialogItem: React.FC<DialogItemPropsType> = (props) => {

    let path = "/dialogs/" + props.id
    return (
        <NavLink className={s.dialog} to={path}>{props.name}</NavLink>
    )
}