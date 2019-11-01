import React, { Component } from 'react';
import './styles/App.css';
import axios from "axios";
import PlayersCard from "./components/PlayersCards";

class App extends Component {
  state = {
    players: []
  }
  
  componentDidMount(){
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
          console.log(res.data);
          this.setState({
            players: res.data
          })
      })
      .catch(err =>{
          console.log("Data Not Returned:", err.response);
      });
}

  render() {
    return (
    <div className="App">

      <div className="row-wrapper">
        {this.state.players.map((players, i) => {
          return <PlayersCard key={i} players={players} />
        })}
      </div>
    </div>
    );
  }
}

export default App;
