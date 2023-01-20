import React from "react";
import s from './ProfileInfo.module.css';


type ProfileInfoPropsType = {}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt="background-image"/>
            <div className={s.desciprionBlock}>avatar+discription</div>
        </div>

    )
}

export default ProfileInfo;