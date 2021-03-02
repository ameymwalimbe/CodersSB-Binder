import React from 'react';
import './App.css';
import Header from './Header';
import Dropdown from './Dropdown';
import TinderCards from './TinderCards'
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
      {/* Header */}
  
      <Router>
        <Header />
        <Switch>
          <Route path = "/chat">
            <h1>I am chat page</h1>
          </Route>
          <Route path = "/cards">
            <TinderCards />
          </Route>
          <Route path ="/profile">
            <h2>Profile page</h2>
          </Route>
          <Route path = "/">
            {/* DropDown */}
            <Dropdown title="Select A Class" items ={items}/>
            {/*TinderCards on Selection*/}
          </Route>
        </Switch>
      </Router>
    </div>

    
  );
}

export default App;
