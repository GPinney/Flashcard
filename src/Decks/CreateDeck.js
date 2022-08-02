import React from "react";
import {useState} from "react"
import {Link, useHistory} from "react-router-dom"
import Header from "../Layout/Header"
import {createDeck} from "../utils/api/index"
import decks from "../data/db.json"

export default function CreateDeck() {
  
  const [name, setName] = useState("");
  const [description, setDescription]= useState("");
  //const handleNameChange = (event) => setName(event.target.value);
  //const handleDescriptionChange = (event) => setDescription(event.target.value);
  
  
  const history = useHistory()
  const initialFormState = {
        name: "",
        description: "",
    }

  const [newDeck, setNewDeck] = useState(initialFormState);
  
   async function handleSubmit(event) {
        event.preventDefault();
        const response = await createDeck(newDeck);
       console.log(response)
        history.push(`/decks/${response.id}`);
    }
  
    const handleChange = (event) => {
        setNewDeck({...newDeck, [event.target.name]: event.target.value});
    };

  return (
    <div>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ul>
          <li className="breadcrumb-item"><Link to='/'> Home</Link></li>
          <li className="breadcrumb-item"><Link to="/decks/new">Create Deck</Link></li>
        </ul>
      </nav>
        <h2>Create Deck</h2>
        <form className="createdeck-form">
          <label>Name
             <input required
               type="text" 
               placeholder="Deck Name"
               id="name"
               name="name"
               onChange={handleChange}
               value={newDeck.name} 
               />
           </label>
          <label>Description
            <input 
              type="text" 
              placeholder="Brief description of deck"
              id="description"
              name="description"
              onChange={handleChange}
              value={newDeck.description}    
              />
          </label>
        </form>
      <button>
         <Link to={`/`} name="cancel">
          Cancel
        </Link>
      </button>
     <button type="button" onClick={handleSubmit} name="submit" >
          Submit
     </button>
    </div>
  );
}