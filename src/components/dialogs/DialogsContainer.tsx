import React from 'react';
import {changeMessageAC, DialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type DialogsContainerPropsType = MapStatePropsType & mapDispatchToPropsType

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type mapDispatchToPropsType = {
    changeMessage: (messageBody: string) => void
    sendMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        changeMessage: (messageBody: string) => {
            dispatch(changeMessageAC(messageBody))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

//как работает функция connect: она создает контейнерную компоненту
//внутри этой контейнерной компоненты она рендерит презентационную компоненту
//и внутрь презентационной компоненты в качестве пропсов (атрибутов)
//передает те свойства, которые сидят в этих двух объектах

//() () это значит, что мы вызвали ф-цию connect, а она вернула нам другую функцию
//и мы вызываем ту функцию, которую вернул нам предыдущий вызов
//connect создает контейнерную компоненту вокруг Dialogs чтобы снабдить ее данными
//этим мы Dialogs "законнектили к стору"
//




//import React from 'react';
// import {changeMessageAC, sendMessageAC} from "../../redux/dialogs-reducer";
// import {ReduxStoreType} from "../../redux/redux-store";
// import {Dialogs} from "./Dialogs";
//
// export type DialogsContainerPropsType = {
//     store: ReduxStoreType
// }
//
// export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
//
//     let state = props.store.getState().dialogsPage
//     const onSendButtonClick = () => {
//         props.store.dispatch(sendMessageAC())
//     }
//     const onChangeNewMessageText = (messageBody: string) => {
//         props.store.dispatch(changeMessageAC(messageBody))
//     }
//
//     return (
//         <Dialogs changeMessage={onChangeNewMessageText} sendMessage={onSendButtonClick} dialogsPage={state}/>
//     );
// };