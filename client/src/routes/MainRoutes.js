import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import Cart from '../pages/Cart';
import ProductList from '../pages/ProductList';
import ProductDetails from "../pages/ProductDetails";
import ErrorPage from '../pages/ErrorPage404';
import AdminCategory from '../pages/Admin/AdminCategory';

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/register'} component={Register}/>
            <Route exact path={'/login'} component={Login}/>
            <Route exact path={'/cart'} component={Cart}/>
            <Route exact path={'/error'} component={ErrorPage}/>
            <Route exact path={'/shop'} component={ProductList}/>
            <Route exact path={'/product-details'} component={ProductDetails}/>
            <Route exact path={'/admin/category'} component={AdminCategory}/>
            <Route exact path="*" render={() => <h1>You are on the wrong page boy</h1>}/>
        </Switch>
    )
}

export default MainRoutes



