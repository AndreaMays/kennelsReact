import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerList } from "./customer/CustomerList"
import { CustomerProvider } from "./customer/CustomerProvider"
import {EmployeeList} from "./empoloyee/EmployeeList"
import {EmployeeProvider} from "./empoloyee/EmployeeProvider"
import {LocationList} from "./location/LocationList"
import {LocationProvider} from "./location/LocationProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalProvider>
                    <AnimalList />
                </AnimalProvider>
            </Route>

            {/* Render the loctation list when http://localhost:3000/animals */}
                <Route path="/locations">
                    <LocationProvider>
                        <LocationList />
                    </LocationProvider>
                </Route>

            {/* Render the customer list when http://localhost:3000/animals */} 
             <Route path="/customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>

            {/* Render the employee list when http://localhost:3000/animals */}
             <Route path="/employees">
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>


        </>
    )
}