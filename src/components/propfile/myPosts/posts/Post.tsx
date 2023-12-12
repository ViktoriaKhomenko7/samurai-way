import React from 'react';
import s from './Post.module.css'
import {PostsDataType} from "./MyPosts";

export const Post = (props: PostsDataType) => {

    return (
        <div className={s.item}>
            <img
                src="https://img.freepik.com/free-photo/i-like-that-good-job-happy-young-dark-skinned-female-wearing-casual-long-sleeved-t-shirt-making-thumbs-up-sign-smiling-cheerfully-showing-her-support-respect-someone-body-language_273609-1258.jpg"
                alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount}👍🏻</span>
            </div>
        </div>
    );
};