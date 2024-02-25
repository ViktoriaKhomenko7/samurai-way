import React, {useRef} from "react";
import s from "../Dialogs.module.css";
import logo from "../../../images/icon-send-mail.png"

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
        <textarea className={s.sendTextarea} ref={newMessage}></textarea>
        <button className={s.sendButton} onClick={sendButton}><img src={logo} alt="img"/></button>
    </div>
    )
}
