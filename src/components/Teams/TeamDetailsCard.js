import React from 'react';

export default function TeamDetailsCard({ team, teamPlayers }) {
  return (
    <div>
      <h1>{team.name}</h1>
      <p className='city'>{`${team.city}, ${team.state}`}</p>
      {teamPlayers < 1 && <p>No players yet</p>}
      {teamPlayers &&
        teamPlayers.map((player) => (
          <div key={player.id}>
            <p>{`${player.position}: ${player.name}`}</p>
          </div>
        ))
      }
    </div >
  );
}
