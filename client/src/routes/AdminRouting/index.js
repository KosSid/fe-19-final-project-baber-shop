import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AdminCategory from '../../pages/Admin/AdminCategory';
import AdminRoute from "../protectedRoutes/AdminRoutes";
import AdminDashboard from "../../pages/Admin/AdminDashboard";
import AdminCatergoryUpdate from "../../pages/Admin/AdminCategoryUpdate";

const AdminRouting = () => {
  return (
    <Switch>
      <AdminRoute exact path={'/admin'} component={AdminDashboard}/>
      <AdminRoute exact path={'/admin/category'} component={AdminCategory}/>
      <AdminRoute exact path={'/admin/category/:id'} component={AdminCatergoryUpdate}/>
      <Route exact path="*" render={() => <h1>You are on the wrong page boy</h1>}/>
    </Switch>
  )
}

export default AdminRouting