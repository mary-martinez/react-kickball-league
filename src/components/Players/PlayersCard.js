import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayersCard({ players }) {
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <Link to={`/players/${player.id}`}>
            <h3>{player.name}</h3>
          </Link>
          <p>{`${player.position} for ${player.teams.name}`}</p>
        </div>
      ))}
    </div>
  );
}
