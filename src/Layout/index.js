import React, {useState} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Decks/Home"
import Study from "../Decks/Study"
import CreateDeck from"../Decks/CreateDeck"
import Deck from "../Decks/Deck"
import EditDeck from "../Decks/EditDeck"
import AddCard from "../Decks/AddCard"
import EditCard from "../Decks/EditCard"



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function Layout() {
  return (
    
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
       <Switch>
        <Route exact={true} path="/">
         <Home />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route path ="/decks/:deckId">
          <Deck />
         </Route>
         <Route path="/decks/:deckId/edit">
          <EditDeck />
         </Route>
          <Route path ="/decks/:deckId/cards/new">
          <AddCard />
         </Route>
          <Route>
          <EditCard path="/decks/:deckId/cards/:cardId/edit" />
         </Route>
        <NotFound />
       </Switch>
      </div>
    </div>
    
  );
}

export default Layout;
