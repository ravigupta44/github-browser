import React from 'react';
import "./Navbar.css";


const Navbar =({user})=> (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src = {user.avatar_url} width="80" height = "80" className="avatar" alt="user"/>
        <h3 style={{color: "white"}}>{user.name}</h3>
        <a className="searchuser" href="/" >Search Other user</a>
        
    </nav>
);
    


export default Navbar;
