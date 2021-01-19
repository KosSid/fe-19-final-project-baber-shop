import React from 'react'
import {Route} from 'react-router-dom'
// import {useSelector} from "react-redux"
import LoadingToRedirect from "./LoadingToRedirect"


const  UserRoute = ({...rest }) => {

    // const user = useSelector( state => state.user);

    // test user value for current set-up (will be removed)| should be initiated in store
    const user = {
        name: 'user1',
        token: '12345678'
    }

    // check if user exist and he is not empty (token is not empty)
    return user && user.token ? <Route {...rest}/> : <LoadingToRedirect/>
}

export default UserRoute;