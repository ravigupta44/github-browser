import React from 'react';
import "./Repository.css";
import Repository from './Repository';



const Repositories = ({user, repos}) => (
    <section className='repositories'>
        {repos.map((repo) => (
      <Repository key={repo.id} repo={repo} user={user} />
    ))}
    </section>
    
);

export default Repositories;
