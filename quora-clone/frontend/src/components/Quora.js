import React from 'react';
import Quoraheader from './Quoraheader';
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Feed from "./Feed";
import './css/Quora.css'

function Quora() {
  return (
    <div classname = 'quora'>
        <Quoraheader/>
        <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    </div>
  )
}

export default Quora