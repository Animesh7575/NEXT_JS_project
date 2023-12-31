import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/aboutus">
        <a>About Us</a>
      </Link>
      <br />
      <Link href="/news">
        <a>News</a>
      </Link>
    </div>
  );
};

export default HomePage;
