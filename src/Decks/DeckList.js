import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

function DeckList({ deck }) {
  const { id, name, description, cards } = deck;
  const deckLength = cards.length;
  const history = useHistory();

  // delete button handler
  const deleteHandler = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this deck? You will not be able to recover it."
      )
    ) {
      await deleteDeck(id);
      history.go(0);
    } else {
      history.go(0);
    }
  };

  return (
    <div className="card w-75 mb-4">
      <div className="card-body">
        <div className="row px-3">
          <h5 className="card-title">{name}</h5>
          <p className="ml-auto">{deckLength} cards</p>
        </div>
        <p className="card-text">{description}</p>
        <div className="row px-3">
          <Link to={`/decks/${id}`} className="btn btn-secondary">
            View
          </Link>

          <Link to={`/decks/${id}/study`} className="btn btn-primary ml-3">
            Study
          </Link>

          <button
            onClick={deleteHandler}
            name="delete"
            value={id}
            className="btn btn-danger ml-auto"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeckList; 

/*export default function DeckList({decks, setdecks}){
  const handleDelete = (id)=>{
    if(
      window.confirm("Delete this deck?\n\nYou will not be able to recover it")
    ) {
      deleteDeck(id);
      setdecks(decks.filter((deck) => deck.id !== id));
    }
  }


return(
  <div>
    {decks.map((deck) =>(
      <div key={deck.id} style={{marginBottom: 20 }}>
        <div className ="card">
          <div className = "card-body">
            <p>{deck.cards.length} cards</p>
            <h2>{deck.name}</h2>
            <p>{deck.description}</p>
            <Link to={`/decks/${deck.id}`}>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginRight: 10}} >
                  View
                </button>
            </Link>
            <Link to={`/decks/${deck.id}/study`}>
              <button type="button" className="btn btn-primary">
                Study
              </button>

            </Link>
            
            <button 
              className ="btn btn-danger"
              style={{float: "right"}}
              onClick={() => handleDelete(deck.id)} 
              >
                Delete
              </button>
            </div>

          </div>
        </div>
    ))}
  </div>
)
} */