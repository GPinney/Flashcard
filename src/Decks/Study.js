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



  if (Object.keys(deck).length) {
    return (
      <div className="col-9 mx-auto">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}> Home</Link>
            </li>

            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Study
            </li>
          </ol>
        </nav>

        <div>
          <h1>{deck.name}: Study</h1>
        </div>
        <Cards cards={deck.cards} />
      </div>
    );
  } else {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}


  