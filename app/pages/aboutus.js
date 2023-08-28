import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AboutUsPage = () => {
  const router = useRouter();
  const { nestedRoute } = router.query;

  return (
    <div>
      <h1>About Us Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/aboutus/developer">
        <a>Developer</a>
      </Link>
      <br />

      {/* Render nested content based on the route */}
      {nestedRoute === 'developer' && (
        <div>
          <p>Animesh Pandey</p>
        </div>
      )}
    </div>
  );
};

export default AboutUsPage;
