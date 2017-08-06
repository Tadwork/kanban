import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Column} from './Column';
import board_response from './board_response';

class App extends Component {
  constructor(props){
    super(props);
    const board = board_response.reduce((ppl,person)=>{ppl[person.name]=person},{})
    this.state = {
      ...board
    }
  }
  addACard(name,card){

    const column = this.state[name];
    column.cards.push(card);
    // const board = this.state;
    // board[name] = column;
    this.setState({
        [name]:column
    });
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
            this.state.map((person)=><Column {...person}/>)
          }
        </div>
      </div>
    );
  }
}
App.childContextTypes = {
	addACard : React.PropTypes.func
}

export default App;
