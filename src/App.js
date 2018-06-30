import React, { Component } from 'react';
import './App.css';

import MemoryCard from './MemoryCard.js' 

function generateDeck() {
  let symbols = ["∆", "ß", "£", "§", "•", "$", "+", "ø"];
  let deck = [];
  for (var i=0; i<16; i++) {
    deck.push(
      {isFlipped:false, Symbol: symbols[i%8]}
    )
  };
  shuffle(deck);
  return deck
}

/*
  Shuffles array in place.
  @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends Component { //this extends the react component class. The component class is React specific. 

  constructor() {
    super();
    this.state = { //this.state is a react specific method
      deck: generateDeck(),
      pickedCards: []
    }
  }



  render() {
    let cardsJSX = this.state.deck.map((card,index) => {
      return <MemoryCard key={index} symbol={card.Symbol} isFlipped={card.isFlipped}/>
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <p className="App-subtitle">Match Cards To Win</p>
        </header>

        <div>
          {cardsJSX.slice(0,4)}
        </div>
        <div>
          {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
        
      </div>
    );
  }
}

export default App;
