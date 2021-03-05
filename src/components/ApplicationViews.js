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
import {AnimalForm} from "./animal/AnimalForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <h2>Animals</h2>
            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            {/* Render the loctation list when http://localhost:3000/animals */}
            <h2>Locations</h2>
                <Route path="/locations">
                    <LocationProvider>
                        <LocationList />
                    </LocationProvider>
                </Route>

            {/* Render the customer list when http://localhost:3000/animals */} 
            <h2>Customers</h2>
             <Route path="/customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>

            {/* Render the employee list when http://localhost:3000/animals */}
            <h2>Employees</h2>
             <Route path="/employees">
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>


        </>
    )
}