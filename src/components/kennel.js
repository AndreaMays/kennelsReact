import React from "react"
import "./kennel.css"
import {AnimalCard} from "./animal/AnimalCard"
import {Location} from "./location/Location"
import {Employee} from "./empoloyee/Employee"
import {Customer} from "./customer/Customer"
// Lines 4 - 6 is importing the exact function from each module
// Lines 19-20 (and other lines like it) are importing the information from the exact function of each module and printing that to the dom
// Onle this module "Kennel.js" is sent to index.js so that the entire app will be rendered to the dom

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>


        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard /> 
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Locations</h2>
        <article className="locations">
            <Location />
            <Location />
         </article>

        <h2>Customers</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>

    </>
)



{/* <address>
    <div>Visit Us at the Nashville North Location</div>
    <div>500 Puppy Way</div>
</address> */}