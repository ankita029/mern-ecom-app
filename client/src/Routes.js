import React from 'react';
import Home from "./core/Home";
import {Route,Switch,BrowserRouter} from "react-router-dom";
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import AdminRoutes from "./auth/helper/AdminRoutes"
import PrivateRoutes from "./auth/helper/PrivateRoutes"
import UserDashBoard from "./user/UserDashBoard"
import AdminDashBoard from "./user/AdminDashBoard"
import AddCategory from "./admin/AddCategory"
import ManageCategory from "./admin/ManageCategory"
import AddProduct from './admin/AddProduct';
import ManageProducts from "./admin/ManageProducts"
import UpdateProduct from "./admin/UpdateProduct";
import Cart from './core/Cart';



const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/signin" exact component={Signin}/>
        <Route path="/cart" exact component={Cart}/>

        <PrivateRoutes path="/user/dashboard" exact component={UserDashBoard}></PrivateRoutes>
        <AdminRoutes path="/admin/dashboard" exact component={AdminDashBoard}></AdminRoutes>
        <AdminRoutes path="/admin/create/category" exact component={AddCategory}></AdminRoutes>
        <AdminRoutes path="/admin/categories" exact component={ManageCategory}></AdminRoutes>
        <AdminRoutes path="/admin/create/product" exact component={AddProduct}></AdminRoutes>
        <AdminRoutes path="/admin/products" exact component={ManageProducts}></AdminRoutes>
        <AdminRoutes path="/admin/product/update/:productId" exact component={UpdateProduct}></AdminRoutes>
</Switch>
    </BrowserRouter>
  )
}
export default Routes;