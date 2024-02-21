import React, {useRef} from "react";
import s from "../Dialogs.module.css";

export type MessagePropsType = {
    message: string
}
export const Message: React.FC<MessagePropsType> = (props) => {

    let newMessage = useRef<HTMLTextAreaElement>(null)
    const sendButton = () => {
        alert(newMessage.current?.value)
    }

    return (
        // <div className={s.message}>{props.message}</div>
    <div className={s.message}>
        <textarea ref={newMessage}></textarea>
        <button onClick={sendButton}>send</button>
    </div>
    )
}
