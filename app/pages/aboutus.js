import React from 'react';
import Link from 'next/link';

const teamDetails = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const AboutUsPage = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <h2>Developers</h2>
      <ul>
        {teamDetails.map(member => (
          <li key={member.id}>
            <Link href={`/aboutus/${member.id}`}>
              <a>{member.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUsPage;
