import React, { useEffect, useState } from 'react';
import PlayersCard from '../../components/Players/PlayersCard';
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
  // console.log(players);
  return (
    <div>
      <PlayersCard {...{ players }} />
    </div>
  );
}
