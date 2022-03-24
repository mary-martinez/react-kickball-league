import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function TeamsCard({ teams }) {
  return (
    <div>
      {teams.map((team) => (
        <Link to={`/teams/${team.id}`} key={team.id} className='team'>
          <h3>{team.name}</h3>
        </Link>
      ))}
    </div>
  );
}
