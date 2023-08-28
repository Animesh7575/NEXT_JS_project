import React from 'react';
import Link from 'next/link';

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/news">
        <a>News</a>
      </Link>
    </div>
  );
};

export default AboutUsPage;
