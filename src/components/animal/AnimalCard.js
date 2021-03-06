import React from "react"
import { Link } from "react-router-dom"
import "./Animal.css"

export const AnimalCard = ({ animal, customer}) => (

<>
    return (
        <section className="animal">
            <h3 className="animal__name">
                <Link to={`/animals/detail/${animal.id}`}>
                    Name: {animal.name}
                 </Link>
            </h3>
        <div className="animal__breed">Breed: {animal.breed} </div>

         {/* <address className="animal__location">Location: {animal.location.name}</address> */}
        {/* <div>Owner: {customer.name}</div>  */}
    </section>

    <img src="/images/mini+Goldendoodle+(7).jpg" alt="goldendoodle puppies"/>
    
    )
 </>
)  

// Commented out div's above are now rendering in "Animal Details". The "LinkTo" above on the Dom now takes you to the 
// details of specific animal you click on. 

// {
//     "id": 1,
//     "name": "Doodles",
//     "breed": "Poodle",
//     "customerId": 1,
//     "locationId": 2
// }
