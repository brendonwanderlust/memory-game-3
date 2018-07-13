import React, { Component } from 'react';
import './App.css'
import { Link, Route } from 'react-router-dom';
import MemoryGame from './MemoryGame.js'
import Ajax from './Ajax.js'



class App extends Component {

	render() {
		return (
            <div>
                <div className="navBar">
                    <Link to="/memory">Memory Game</Link>
                    <Link to="/ajax">Ajax</Link>
                </div>
                <Route path="/memory" component={MemoryGame}/>
                <Route path="/ajax" component={Ajax}/>
            </div>
            
            
        ) 
	}
}

export default App;