import React from "react";
import {Link, useParams} from "react-router-dom"
import { readDeck } from "../utils/api/index.js"
import { useEffect, useState } from "react";
import Cards from "./Cards"

 


export default function Study() {

  const [deck, setDeck] = useState({})
  const {deckId} = useParams()

  useEffect(() => {
    const abortController = new AbortController()
    async function findDeck() {
      const currentDeck = await readDeck(deckId, abortController.signal)
      setDeck(currentDeck);
    }

    findDeck();
    return () => abortController.abort();
  }, [deckId]);






  return (
    <div>
    <div>
     
       <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}> Home</Link>
            </li>

            <li className="breadcrumb-item">
          
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>

            <li className="breadcrumb-item active">
              Study
            </li>
          </ol>
        </nav>
      </div>

      <div>
      <h1>{deck.name}: Study</h1>
      </div>
      <div>
        <Cards cards={deck.cards} />
      </div>

      </div>
    )
}
     