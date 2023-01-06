import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div>

            <div>My posts
                <textarea></textarea>
                <button>Add Post</button>

                <div>New post</div>
            </div>
            <div>
                <Post message='Hi,how are you?' likesCount={13}/>
                <Post message="It's my first post" likesCount={20}/>



            </div>

        </div>
    )
}
export default MyPosts;