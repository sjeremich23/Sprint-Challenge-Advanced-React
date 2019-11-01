import React from "react";

  const PlayersCard = props => {
      return (
            <div className="card">
              <h1>{props.players.name}</h1>
              <h1>{props.players.country}</h1>
              <h1>Searches: {props.players.searches}</h1>
            </div>
      )
}

export default PlayersCard;