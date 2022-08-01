import React, {useEffect, useState} from "react"
import {readDeck} from "../utils/api/index"
import {Link, useHistory, useParams} from "react-router-dom"
import decks from "../data/db.json"
import cards from "../data/db.json"

export default function Deck() {
  
  const[deck, setDeck] = useState()
  
  const deckId = useParams().deckId
  
    useEffect(() => {
    const abortController = new AbortController()
    async function loadDeck() {
      const response = await readDeck(deckId, abortController.signal)
      setDeck(response);
    }

    loadDeck();
  }, [deckId]);
 
 
    

  
  return (
   <div>
    <div>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ul>
          <li className="breadcrumb-item"><Link to='/'> Home</Link></li>
          <li className="breadcrumb-item"><a href="">{deckId}</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <h4>{decks.name}</h4>
      <p>{decks.description}</p>
      <button>Edit</button>
      <button>Study</button>
      <button>+Add Cards</button>
      <button>Delete</button>
    </div>
    <div>
      <h2>Cards</h2>
    </div>
    <div>
      <h1>Not Found</h1>
    </div>
   </div>
  );
}