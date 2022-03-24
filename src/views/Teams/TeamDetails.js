import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamDetailsCard from '../../components/Teams/TeamDetailsCard';
// import { fetchPlayers, fetchTeamPlayers } from '../../services/players';
import { fetchTeamById } from '../../services/teams';

export default function TeamDetails() {
  const params = useParams();
  const teamId = params.id;
  const [team, setTeam] = useState({});
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchTeamById(teamId).then((data) => {
  //     setTeam(data);
  //     setTeamPlayers(data.players);
  //   });
  // }, [teamId]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(teamId);
      setTeam(data);
      setTeamPlayers(data.players);
      setLoading(false);
      // console.log(data);
      // const data2 = await fetchTeamPlayers(teamId);
      // const data2 = await fetchPlayers();
      // console.log(data2);
    };
    fetchData();
  }, [teamId]);
  // console.log(teamPlayers);

  if (loading) return (<p>Loading team info</p>);
  return (
    <div>
      <TeamDetailsCard {...{ team, teamPlayers }} />
    </div>
  );
}
