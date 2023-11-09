import React from 'react';
import s from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Katya</div>
                <div className={s.dialog}>Masha</div>
                <div className={s.dialog}>Pasha</div>
                <div className={s.dialog}>Olga</div>
                <div className={s.dialog}>Viktor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Ok</div>
            </div>
        </div>
    );
};