import React, { Component } from 'react';
import "../css/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navtitle">
          <div className="dateandicon">
            <div className="cicon">C</div>
            <div className="h1class">
              <h1 className="h1class1">Today</h1>
              <h1 className="h1class2">Thursday , 14 November | 6 Tasks</h1>
            </div>
          </div>

          <div className="rightside">
            <button className='addtask'>Add Task +</button>
          </div>
        </div>
      </div>
    );
  }
}
