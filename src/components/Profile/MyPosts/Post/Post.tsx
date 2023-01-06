import React from 'react';
import s from './Post.module.css'

type PostPropsType={
    message: string;
    likesCount: number;
}
const Post = (props:PostPropsType) => {
    return (


        <div className={s.item}>
            <img
                src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000'/>
            {props.message}
            <span> {props.likesCount} likes</span>
        </div>
    )
}
export default Post;