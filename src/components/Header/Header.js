import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact to='/' style={{ textDecoration: 'none' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/teams' style={{ textDecoration: 'none' }}>
            Teams
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/players' style={{ textDecoration: 'none' }}>
            Players
          </NavLink>
        </li>
      </ul>
    </div >
  );
}
