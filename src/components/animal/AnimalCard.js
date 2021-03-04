import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => (

    <section className="animal">
        <h3 className="animal__name">Name: {animal.name}</h3>
        <address className="animal__location">Location: {animal.location.name}</address>
        <breed class="animal__breed">Breed: {animal.breed} </breed>
        <div className="animal__owner"> Owner: {customer.name}</div>
    </section>

)

// {
//     "id": 1,
//     "name": "Doodles",
//     "breed": "Poodle",
//     "customerId": 1,
//     "locationId": 2
// }
