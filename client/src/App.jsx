import React, { Component } from 'react';
import './styles/App.css';
import axios from "axios";
import PlayersCard from "./components/PlayersCards";
import Header from "../src/components/Header";
import styled from "styled-components";

class App extends Component {
  state = {
    players: []
  }
  
  componentDidMount(){
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
          this.setState({
            players: res.data
          })
      })
      .catch(err =>{
          console.log("Data Not Returned:", err.response);
      });
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.players !== this.state.players){
        // console.log("User state has changed")
    }
  }

  render() {
    return (
    <>
    <Center>
      <Header />
    </Center>
      <div className="row-wrapper">
        {this.state.players.map((players, i) => {
          return <PlayersCard key={i} players={players} />
        })}
      </div>
    </>
    );
  }
}

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`; 

export default App;
