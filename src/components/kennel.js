import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./kennel.css";
// import {Location} from "./location/Location"
// import {EmployeeList} from "./empoloyee/EmployeeList"
// import {EmployeeProvider} from "./empoloyee/EmployeeProvider"
// import {Customer} from "./customer/Customer"
// import { PropsAndState } from "./PropsAndState";
// import { AnimalProvider } from "./animal/AnimalProvider"
// import { AnimalList } from "./animal/AnimalList"
// import {AnimalCard} from "./animal/AnimalCard"
// Lines 4 - 6 is importing the exact function from each module
// Lines 19-20 (and other lines like it) are importing the information from the exact function of each module and printing that to the dom
// Onle this module "Kennel.js" is sent to index.js so that the entire app will be rendered to the dom

export const Kennel = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("kennel_customer")) {
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );