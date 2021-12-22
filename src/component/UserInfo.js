import React from 'react';
import "./UserInfo.css";

const UserInfo=({user})=> (
    <div className='user__info'>
        <img src = {user.avatar_url} className='avatar' width="130" height="130" alt='profileimage'/>
        <div className='user__infoDetails'>
            <h5>{user.name}</h5>
            <div className='user__infos'>
            {
               user.location && (
                  <div className='user__infoDetail'>
               <i className='fa fa-map-marker '/>
               <span className='pright'>{user.location}</span>
            </div>
               )
            }
            {
               user.blog && (
                  <div className='user__infoDetail'>
               <i className='fa fa-globe '/>
               <span className='pright'>{user.blog}</span>
            </div>
               )
            }
            {
               user.email && (
                  <div className='user__infoDetail'>
               <i className='fa fa-envelope '/>
               <span className='pright'>{user.email}</span>
            </div>
               )
            }
            {
               user.twitter_username && (
                  <div className='user__infoDetail'>
               <i className='fa fa-twitter '/>
               <span className='pright'>{user.twitter_username}</span>
            </div>
               )
            }
            <div className='user__infoDetail'>
               <i className='fa fa-group '/>
               <span className='pright'>{user.followers} followers</span>
            </div>
            <div className='user__infoDetail'>
               <i className='fa fa-heart '/>
               <span className='pright'>{user.following} following</span>
            </div>
            </div>
        </div>
    </div>
);

export default UserInfo
