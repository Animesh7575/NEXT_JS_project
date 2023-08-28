import React from 'react';
import { useRouter } from 'next/router';

const teamDetails = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

const DeveloperPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const developer = teamDetails.find(member => member.id === parseInt(id));

  return (
    <div>
      {developer ? (
        <div>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </div>
  );
};

export default DeveloperPage;
