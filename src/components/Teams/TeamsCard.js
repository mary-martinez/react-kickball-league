import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamsCard({ teams }) {
  return (
    <div>
      {teams.map((team) => (
        <Link key={team.id} className='team'>
          <h3>{team.name}</h3>
        </Link>
      ))}
    </div>
  );
}
