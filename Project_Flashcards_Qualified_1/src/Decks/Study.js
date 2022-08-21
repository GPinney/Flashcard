import React from "react";
import {Link} from "react-router-dom"
import decks from "../data/db.json"

import readDeck from "../utils/api/index"

export default function Study() {
  return (
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
    )
}
     