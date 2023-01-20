import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType={
name: string;
id: string;
}

const DialogItem=(props:DialogItemPropsType)=>{
    let path= '/dialogs/'+props.id
    return(
        <div className={s.dialog+' '+s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType={
    message: string;
}
const Message=(props:MessagePropsType)=>{
    return(
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}


type DialogsPropsType={

}
const Dialogs =(props:DialogsPropsType)=>{
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrew' id='2'/>
                <DialogItem name='Viktor' id='3'/>
                <DialogItem name='Max' id='4'/>
                <DialogItem name='Cate' id='5'/>
                <DialogItem name='Muhamed' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!' />
                <Message message='How are you?' />
                <Message message='Yo!' />
                <Message message='Yo!' />
                <Message message='Yo!' />
                <Message message='Yo!' />
            </div>
        </div>
    )
}
export default Dialogs;