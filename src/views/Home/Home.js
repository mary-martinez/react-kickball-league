import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className='headings'>Welcome to the PNW Kickball League!</h1>
      <div className='page-content'>
        <h3>Check out our <Link to={'/teams'}>local teams</Link>
        </h3>
        <h3>Or check in on your favorite <Link to={'/players'}>players</Link></h3>
      </div>
    </div>
  );
}
