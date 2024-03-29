import React, {useRef} from "react";
import s from "../Dialogs.module.css";

export type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {

    return (
        <div className={s.message}>{props.message}</div>
    )
}
