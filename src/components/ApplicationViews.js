import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { Customer } from "./customer/Customer"

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
                    <AnimalCard />
                </AnimalProvider>
            </Route>

            {/* Render the loctation list when http://localhost:3000/animals */}
            <Route path="/locations">
                <LocationProvider>
                    <Location />
                </LocationProvider>
            </Route>

            {/* Render the customer list when http://localhost:3000/animals */}
            <Route path="/customers">
                <CustomerProvider>
                    <Customer />
                </CustomerProvider>
            </Route>

            {/* Render the employee list when http://localhost:3000/animals */}
            <Route path="/employees">
                <EmployeeProvider>
                    <Employee />
                </EmployeeProvider>
            </Route>


        </>
    )
}