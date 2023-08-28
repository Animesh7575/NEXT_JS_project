import React from 'react';
import Link from 'next/link';

const NewsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <Link href="/aboutus">
        <a>About Us</a>
      </Link>
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default NewsPage;
