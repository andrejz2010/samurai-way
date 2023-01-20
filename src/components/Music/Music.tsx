import React from 'react'
import s from './Music.module.css'

type MusicPropsType = {}
const Music = (props: MusicPropsType) => {
    return (

        <div className="dialogs">
            <div className='dialogs-items'>
                <div className='dialog'>
                    Dimych
                </div>
                <div className='dialog'>
                    Andrej
                </div>
                <div className='dialog'>
                    Cate
                </div>
                <div className='dialog'>
                    Max
                </div>
            </div>
            <div className="messages">
                <div className="message">Hi</div>
                <div className="message">How is your studies?</div>
                <div className="message">Yo</div>
            </div>
        </div>
    )
}
export default Music;