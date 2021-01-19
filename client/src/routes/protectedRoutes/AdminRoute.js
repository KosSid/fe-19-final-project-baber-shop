import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
// import {useSelector} from "react-redux"
import LoadingToRedirect from "./LoadingToRedirect"


const  AdminRoute = ({...rest }) => {
    // const user = useSelector( state => state.user);
    const [ok, setOk] = useState(false)

    // test user value for current set-up (will be removed)| should be initiated in store
    const user = {
        name: 'user1',
        token: '12345678'
    }

    useEffect(() => {
        if(user && user.token) {
            // here will be request to server to check user status if postive setOk(true)
            setOk(true)

        }
    }, [user])


    // path if Admin or redirect to Index page
    return ok  ? <Route {...rest} /> : <LoadingToRedirect/>
}

export default AdminRoute;