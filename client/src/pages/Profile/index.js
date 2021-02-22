import React from 'react'
import {Row} from 'antd';
import ProfileRoutes from "../../routes/ProfileRoutes";
import UserOptionsMenu from "../../components/Profile/UserOptionsMenu/UserOptionsMenu";
import './style.less'

const Profile = () => {


    return (
        <div className='profile'>
            <Row justify-content='center'>
                <UserOptionsMenu/>
                <ProfileRoutes/>
            </Row>
        </div>
    )
}

export default Profile;