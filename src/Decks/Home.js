/*import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../utils/api/index";

import DeckList from "../Decks/DeckList";

function Home() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    async function getDeck() {
      const getDeckFromAPI = await listDecks();
      setDecks(getDeckFromAPI);
    }
    getDeck();
  }, []);

  return (
    <div>
      <div className="row mx-auto">
        <Link to="/decks/new" className="btn btn-secondary w-25 mb-3">
          Create Deck
        </Link>
      </div>
      <div className="row w-100 mx-auto">
        {decks.map((deck) => (
          <DeckList key={deck.id} deck={deck} />
        ))}
      </div>
    </div>
  );
}

export default Home; */
import React from "react"

import {Link} from "react-router-dom"


export default function Home(){
  return (
    <div>
       <Link className="btn btn-secondary mb-2" to="/decks/new">
          <button type="button" className="deckBtn">+ Create Deck</button>
        </Link>
    
      <div className="cardDisplay">
        <h4>Rendering in React</h4>
        <p>React's component structure allows for quick rendering</p>
        <Link className="btn btn-secondary mb-2" to="/decks/:deckId">
          <button type="button">View</button>
        </Link>
        <Link className="btn btn-secondary mb-2" to="/decks/:deckId/study">
          <button type="button">Study</button>
        </Link>
        <button type="button" className="deleteBtn">Delete</button>
      </div>
    </div>
  )
} 


