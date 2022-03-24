import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from '../../services/players';

export default function PlayerDetails() {
  const params = useParams();
  const playerId = params.id;
  const [player, setPlayer] = useState({});
  const [team, setTeam] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(playerId);
      setPlayer(data);
      setTeam(data.teams);
    };
    fetchData();
  }, [playerId]);
  console.log(player);

  return (
    <div>
      <h1>{player.name}</h1>
      <h3>{player.position}</h3>
      <h3>{`Team: ${team.name}`}</h3>
      <p className='city'>{`${team.city}, ${team.state}`}</p>
    </div>
  );
}
