import React from "react"
import "./Customer.css"

export const Customer = ({customer}) => (
 
    <customer class="customer">
        <div>Name: {customer.name}</div>
        <div>Address: {customer.address}</div>
    </customer>

)