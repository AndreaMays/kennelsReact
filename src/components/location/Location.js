import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
 
    <address class="location">
        <div>Visit Us at the Nashville North Location</div>
        <div>Location: {location.address}</div>
    </address>

)