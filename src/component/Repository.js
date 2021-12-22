import React from 'react'
import "./Repository.css";

const Repository=({user, repo})=> (
    <div className='repo'>
    <div>
        <div className='title'>
            <i className='fa fa-book pr-1'/>
            <a
          href={`https://github.com/${repo.full_name}`}
          target="_blank"
          rel="noopener norefferer"
        >
                <span>{repo.name}</span>
            </a>
        </div>
        <span className='desc'>{repo.description}</span>
        </div>
        <div className='d-flex'>
            <div className='subitem'>
                <i className='fa fa-code'/>
                <span>{repo.language}</span>
            </div>
            <div className='subitem'>
                <i className='fa fa-star'/>
                <span>{repo.stargazers_count}</span>
            </div>
            <div className='subitem'>
                <i className='fa fa-code-fork'/>
                <span>{repo.forks_count}</span>
            </div>
        </div>
    </div>
);

export default Repository;
