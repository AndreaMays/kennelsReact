import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { useHistory } from "react-router-dom"
import "./Animal.css"


export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getCustomers()
    .then(getLocations)
    .then(getAnimals)
  }, [])


  return (
      <>
    <div className="animals">
      {/* <h2>Animals</h2> */}
            <button onClick={() => {history.push("/animals/create")}}>
              "Add Animal"
            </button>
      {/* {console.log("AnimalList: Render", animals)} */}
      {
        animals.map(animal => {
          const owner = customers.find(c => c.id === animal.customerId)
          const clinic = locations.find(l => l.id === animal.locationId)

          return <AnimalCard key={animal.id}
          location={clinic}
          customer={owner}
          animal={animal} />
        })
      }
    </div>
    </>
  )
}
