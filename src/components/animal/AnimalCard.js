import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (

    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <breed class="animal__breed">Breed: {animal.breed} </breed>
        <address className="animal__location">Location: {animal.location.name}</address>
    </section>

)

// {
//     "id": 1,
//     "name": "Doodles",
//     "breed": "Poodle",
//     "customerId": 1,
//     "locationId": 2
// }
