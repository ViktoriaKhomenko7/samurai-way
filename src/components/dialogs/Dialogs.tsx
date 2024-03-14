import React, {ChangeEvent} from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {DialogsContainerPropsType} from "./DialogsContainer";

// export type DialogsPropsType = {
//     dialogsPage: DialogsPageType
//     sendMessage: ()=>void
//     changeMessage: (messageBody: string)=>void
// }

export const Dialogs: React.FC<DialogsContainerPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(
        d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(
        m => <Message key={m.id} message={m.message}/>)

    let newMessageBody = state.newMessageText

    const onSendButtonClick = () => {
        props.sendMessage()
    }

    // const onKeyDownHandler = (e) => {
    //     if(e.key === 13) {
    //         onSendButtonClick()
    //     }
    // }
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