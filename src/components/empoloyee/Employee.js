import React from "react"
import "./Employee.css"

export const Employee = ({ employee }) => (
 
    <employee class="employee" >
        <div>Name: {employee.name}</div>
        <div>Location:{employee.location.name}</div>
    </employee>

)