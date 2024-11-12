import React from "react";
import {
  Home,
  WishList,
  About,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
} from "./shop";
// import card from "./shop/home/card";
// import ProductList from "./shop/home/productlist";
import Login from "./shop/auth/Login";
import Signup from "./shop/auth/Signup";
import Blog from "./shop/partials/Blog";
import Contact from "./shop/partials/contact";
import { DashboardAdmin, Categories, Products, Orders ,Userinfo} from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";
import  Forget_Password_Update  from "./shop/auth/Forget_Password_Update";
import Forget_otp from "./shop/auth/Forget_otp";
import { ForgetEmail } from "./shop/auth/Froget_email";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Userinfo} from "./admin/User/index";
/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/ProductList" component={ProductList} /> */}
        {/* <Route exact path="/card" component={card} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/Register" component={Signup} />
        <Route exact path="/wish-list" component={WishList} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Contact-us" component={Contact} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/Forget_Password_Update" component={Forget_Password_Update} />
        <Route exact path="/Forget_otp" component={Forget_otp} />
        <Route exact path="/Froget_email" component={ForgetEmail} /> 
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        

        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
         <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/userinfo"
          component={Userinfo}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />
        {/* Admin Routes End */}

        {/* User Dashboard */}
        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />
        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
