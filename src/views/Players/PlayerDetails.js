import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchPlayerById } from '../../services/players';

export default function PlayerDetails() {
  const params = useParams();
  const playerId = params.id;
  const [player, setPlayer] = useState({});
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(playerId);
      setPlayer(data);
      setTeam(data.teams);
      setLoading(false);
    };
    fetchData();
  }, [playerId]);

  if (loading) return (<div className="loader"></div>);

  return (
    <div>
      <h1>{player.name}</h1>
      <h3>{player.position}</h3>
      <h3>{`Team: `}
        <Link to={`/teams/${team.id}`} >
          {`${team.name}`}
        </Link>
      </h3>
      <p className='city'>{`${team.city}, ${team.state}`}</p>
    </div>
  );
}
