import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Animal.css"
import { useHistory } from 'react-router-dom';

export const AnimalForm = () => {
    const { addAnimal } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

  /*
    With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.

    Define the intial state of the form inputs with useState()
    */

   const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0
  });


// get customers state
// and locations state on initialization(from out in the world somewhere), so we can provide their data in the form dropdowns

useEffect(() => {
    getCustomers().then(getLocations)
}, [])

const history = useHistory();

//Controlled component
const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state. line 40 right side of equal sign is "spread operator"*/
    const newAnimal = { ...animal }
    let selectedVal = event.target.value

    
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newAnimal[event.target.id] = selectedVal
        // update state
        setAnimal(newAnimal)
      }

      const handleClickSaveAnimal = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form
  
        const locationId = animal.locationId
        const customerId = animal.customerId
  
        if (locationId === 0 || customerId === 0) {
          window.alert("Please select a location and a customer")
        } else {
          //invoke addAnimal passing animal as an argument.
          //once complete, change the url and display the animal list
          addAnimal(animal)
          .then(() => history.push("/animals"))

        // const handleNameInputChange = (event) => {
        //     const newAnimal = {

        //     }
        }
        }
      
      
      return (
          
        <form className="animalForm">
            <h2 className="animalForm__title">New Animal</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Animal name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={animal.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Animal breed:</label>
                    <input type="text" id="breed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer: </label>
                    <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
              onClick={handleClickSaveAnimal}>
              Save Animal
            </button>
        </form>
        
      )
    }
  