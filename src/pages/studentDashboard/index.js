import {useState} from 'react'
import React from "react";
import Dashboard from '../../components/studentDashboard/Dashboard'
import {tagContext} from '../../components/context/tagContext.js'

function SDashboard() {
  const [chosenTag, setChosenTag] = useState('Upcoming')
  return (
    <div className="App">
      <tagContext.Provider value={[chosenTag, setChosenTag]}>
      <Dashboard />
      </tagContext.Provider>
    </div>
  );
}

export default SDashboard;
