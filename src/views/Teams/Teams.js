import React, { useEffect, useState } from 'react';
import TeamsCard from '../../components/Teams/TeamsCard';
import { fetchTeams } from '../../services/teams';

export default function Teams() {
  const [error, setError] = useState('');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchTeams();
        setTeams(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }, []);

  if (loading) return (<div aria-label='loader' className="loader"></div>);

  return (
    <div>
      {error && <p>{error}</p>}
      <TeamsCard {...{ teams }} />
    </div>
  );
}
