import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css';

export default function TeamDetailsCard({ team, teamPlayers }) {
  return (
    <div>
      <h1>{team.name}</h1>
      <p className='city'>{`${team.city}, ${team.state}`}</p>
      {teamPlayers.length < 1 && <p>No players yet</p>}
      {teamPlayers &&
        teamPlayers.map((player) => (
          <div key={player.id}>
            <p>{`${player.position}: `}
              <Link to={`/players/${player.id}`}>
                {player.name}
              </Link>
            </p>
          </div>
        ))
      }
    </div >
  );
}
