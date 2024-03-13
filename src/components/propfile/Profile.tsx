import React from 'react';
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/posts/MyPostsContainer";

// type ProfilePropsType = {
//     // store: ReduxStoreType
// }

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

//import React from 'react';
// import {ProfileInfo} from "./profileInfo/ProfileInfo";
// import {MyPostsContainer} from "./myPosts/posts/MyPostsContainer";
// import {ReduxStoreType} from "../../redux/redux-store";
//
// type ProfilePropsType = {
//     store: ReduxStoreType
// }
//
// export const Profile: React.FC<ProfilePropsType> = (props) => {
//     return (
//         <div>
//             <ProfileInfo/>
//             <MyPostsContainer store={props.store}
//             />
//         </div>
//     );
// }