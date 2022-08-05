import React, {useEffect, useState} from "react"
import { deleteCard, readDeck, deleteDeck } from "../utils/api/index"
import {Link, useHistory, useParams} from "react-router-dom"


export default function Deck(props) {
  
  const[deck, setDeck] = useState()

  const history = useHistory()
  const deckId = props.deckId
  const { id, name, description, cards } = deck


    useEffect(() => {
    const abortController = new AbortController()
    async function loadDeck() {
      const response = await readDeck(deckId, abortController.signal)
      setDeck(response);
    }

    loadDeck();
    return () => abortController.abort();
  }, [deckId]);
 
  const deleteHandler = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this deck? You will not be able to recover it."
      )
    ) {
      await deleteDeck(id);
      history.push("/");
    } 
    else {
      history.go(0);
    }
  };
    

  
  return (
   <div>
    <div>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ul>
          <li className="breadcrumb-item"><Link to='/'> Home</Link></li>
          <li className="breadcrumb-item"><Link to="/decks/:deckId">{deckId}</Link></li>
        </ul>
      </nav>
    </div>
    <div>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <button>Edit</button>
      <button>Study</button>
      <button>+Add Cards</button>
      <button onClick={async () => {
                       if (
                        window.confirm(
                          "Are you sure you want to delete this card? You will not be able to recover it."
                        )
                      ) {
                        await deleteCard(card.id);
                        history.go(0);
                      } else {
                        history.go(0);
                      }
                    }}
                    name="deleteCard"
                    value={card.id}
                    className="btn btn-danger ml-3"
                  >
                    Delete </button>
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