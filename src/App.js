import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {Column} from './Components/Column';
import board_response from './board_response';
import update from 'immutability-helper';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      board:board_response
    }
  }
  addACard(name,card){
    this.setState(((prev)=>{
      const personIndex = prev.board.findIndex((p)=>p.name === name);
      const newState =  {
        board:{
          [personIndex]:{
            cards: {$push: [card]}
          }
        }
      }
      console.log(personIndex,newState)

      return update(prev, newState)
    }));
  }
  getChildContext(){
    return {
      addACard: this.addACard.bind(this)
    }
  }
  render() {
    return (
      <div className="App">
        <div className="column-container">
          {
            this.state.board.map((person)=><Column {...person}/>)
          }
        </div>
      </div>
    );
  }
}
App.childContextTypes = {
	addACard : PropTypes.func
}

export default App;
