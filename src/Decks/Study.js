import React from "react";
import {Link} from "react-router-dom"


import readDeck from "../utils/api/index"
// remember to change something to actual deck name 
export default function Study(props) {

  const deckId = props.deckId
  return (
    <div>
     
       <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}> Home</Link>
            </li>

            <li className="breadcrumb-item">
          
              <Link to={`/decks/${deckId}`}>something</Link>
            </li>

            <li className="breadcrumb-item active">
              Study
            </li>
          </ol>
        </nav>
      </div>
    )
}
     