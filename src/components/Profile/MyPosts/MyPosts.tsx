import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div className={s.postBlock}>

            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add Post</button>

            <div>New post</div>
            <div>
                <Post message='Hi,how are you?' likesCount={13}/>
                <Post message="It's my first post" likesCount={20}/>


            </div>

        </div>
    )
}
export default MyPosts;