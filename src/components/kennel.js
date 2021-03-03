import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./kennel.css"
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
    <NavBar />
    <ApplicationViews />
    
        {/* <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small> */}

        {/* <PropsAndState yourName="Drea" />
        <h2>Animals</h2>
        <article className="animals">
        <AnimalProvider>
            <AnimalList/>
            {/* <AnimalCard />
            <AnimalCard />
            <AnimalCard /> 
            <AnimalCard /> 
            <AnimalCard />  */}
        {/* </AnimalProvider> */}
        {/* </article> */}

        {/* // <h2>Employees</h2>
        // <article className="employees">
        // <EmployeeProvider>  */}
            {/* {/* <Employee />
            <Employee />
        <Employee /> */}
            {/* <EmployeeList />
        </EmployeeProvider>
        </article> */}

        {/* <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
         </article> */}

        {/* <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article> */}

        
    </>
)