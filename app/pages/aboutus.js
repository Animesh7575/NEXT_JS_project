import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const teamDetails = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const AboutUsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const teamMember = teamDetails.find(member => member.id === parseInt(id));

  return (
    <div>
      <h1>About Us Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href="/aboutus/1">
        <a>Yash</a>
      </Link>
      <br />
      <Link href="/aboutus/2">
        <a>Vaibhav</a>
      </Link>
      <br />
      <Link href="/aboutus/3">
        <a>Suresh</a>
      </Link>
      <br />

      {teamMember ? (
        <div>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default AboutUsPage;
