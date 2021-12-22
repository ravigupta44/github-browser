import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Repositories from '../component/Repositories';
import Tabs from '../component/Tabs';
import UserInfo from '../component/UserInfo';
import {getUserData, getUserRepo} from "../api/Api";
import Loading from '../component/Loading';


function UserPage({match}) {

    const [user, setUser] = useState();
    const [repos, setRepos] = useState([]);
    // const userNameParams = match.params.userName;
    const userNameParams = match.params.userName;


    useEffect(() => {
        fetchUser();
        fetchRepos();
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
      }, []);
    
      async function fetchUser() {
        const { data } = await getUserData(userNameParams);
        setUser(data);
      }
      async function fetchRepos() {
        const { data } = await getUserRepo(userNameParams);
        setRepos(data);
      }
    return (
        
            <>
                {user ? (
                    <>
                    
                    <Navbar user={user}/>
                    <div className='container'>
                    <UserInfo user={user}/>
                    <Tabs repos={repos} user={user}/>
                    <Repositories repos={repos} user={user}/>
                    </div>
                    </>
                ):(
                    <Loading/>
                )}
            </>
    );
}

export default UserPage;
