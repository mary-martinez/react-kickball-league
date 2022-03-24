import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamDetailsCard from '../../components/Teams/TeamDetailsCard';
import { fetchTeamById } from '../../services/teams';

export default function TeamDetails() {
  const params = useParams();
  const teamId = params.id;
  const [team, setTeam] = useState({});
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(teamId);
      setTeam(data);
      setTeamPlayers(data.players);
      setLoading(false);
    };
    fetchData();
  }, [teamId]);

  if (loading) return (<div className="loader"></div>);

  return (
    <div>
      <TeamDetailsCard {...{ team, teamPlayers }} />
    </div>
  );
}
