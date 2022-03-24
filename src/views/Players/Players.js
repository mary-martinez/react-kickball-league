import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/players';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);
  console.log(players);
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h3>{player.name}</h3>
          <p>{`${player.position} for ${player.teams.name}`}</p>

        </div>
      ))}
    </div>
  );
}
