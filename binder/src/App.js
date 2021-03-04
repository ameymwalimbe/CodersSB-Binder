import React from 'react';
import './App.css';
import Header from './Header';
import Dropdown from './Dropdown';
import TinderCards from './TinderCards'
import Profile from './profile';
import Login from './Login'; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 
const items = [
  {
    id: 1,
    value:'CS 8',
  },
{
    id: 2,
    value:'CS 16',
},
{
    id: 3,
    value:'CS 32',
},
{
    id: 4,
    value:'CS 40',
},

];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path = "/">
            <Login />
          </Route>
          <Route path = "/chat">
            <div className = "chatround">
            <h1>I am chat page</h1>
            </div>
          </Route>
          <Route path = "/cards">
            <div className = "cards">
            <TinderCards />
            </div>
          </Route>
          
          <Route path ="/profile">
            <div className = "prof_card">
              <h2>BUILD YOUR PROFILE</h2>
              <Profile />
            </div>
          </Route>

          <Route path = "/home">
            <div className = "dropdown">
            <div className = "dropdown_text">
              <h2>Welcome to Binder</h2>
              </div>
              <Dropdown title="Please Select A Class" items ={items}/>
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
 
  );
}

export default App;
