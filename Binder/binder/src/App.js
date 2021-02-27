import React from 'react';
import './App.css';
import Header from './Header';
import Dropdown from './Dropdown'

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
      <Header />
      <Dropdown title="Select A Class" items ={items}/>
      {/* DropDown */}
      {/* Profile Cards */}
      {/* Buttons below Binder Profile */}

      {/* Chat screen */}
      {/* Individual chat screen */}
    </div>

    
  );
}

export default App;
