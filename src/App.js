import React from 'react';
import './App.css';
import UserPage from './container/UserPage';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

function App() {
  const username = prompt("Enter Github Username");
  return (

    // <div>
    //   <UserPage/>
    // </div>
    <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={UserPage} />
        {/* <Redirect to="/ravigupta44" /> */}
       <Redirect to={`/${username}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
