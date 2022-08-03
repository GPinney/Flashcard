
import React, {useState, useEffect} from "react"
import {listDecks} from "../utils/api"
import {Link} from "react-router-dom"
import DeckList from "./DeckList"


export default function Home(){

const [decks, setDecks] = useState([])
const controller = new AbortController();

useEffect(() => {
async function getAllDecks() {
  const allDecks = await listDecks(controller.signal)
  setDecks(allDecks)
}
getAllDecks()
},[])

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
    /*<div>
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
} */


/*onDelete (deckId) { 
  const answer = window.confirm ("Delete this deck?") 
  if (answer) { deleteDeck(deckId) } 
} 
return ( 
  <div className="container"> 
  <Link className="" to= "/decks/new"><button className="btn">+ Create Deck</button></Link> 
  {decks.map (deck =><div className="card mt-3" key={deck.id}> 
                    <div className="card-body"> 
                    <p className="card-subtitle mb-2 text-muted float-right">{deck.cards.length} cards</p> 
                    <h4 className="card-title">{deck.name}</h4> 
                    <p className="card-text">{deck.description}</p>
                     <Link to={`/decks/${deck.id}`} className="btn btn-primary ">View</Link> 
                     <Link to={`/decks/${deck.id}/study`} className="btn btn-primary ml-3">Study</Link> 
                     <button className="btn btn-danger ml-3" onClick= {()=>onDelete(deck.id)}>Delete</button> </div> </div>) } </div> ); 
                     } export default Home; */