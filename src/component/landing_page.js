import React, { Component } from "react";
import "../css/landing_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTasks,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Importing icons

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    // Initialize the state to track the active button
    this.state = {
      activeButton: "All", // Set default active button
    };
  }

  // Method to handle button click and set the active button
  handleButtonClick = (buttonName) => {
    this.setState({ activeButton: buttonName });
  };
  render() {
    return (
      <div className="landing">
        <div className="topbox">
          <div className="menubar">
            <a href="#">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTasks} /> All Task
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faCalendar} /> Events
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faUser} /> Profile
            </a>
          </div>
          <div className="statusbox">
            <div className="statusbox1">
              <p>Montly Task Progress</p>
            </div>
            <div className="statusbox2">
              <p>Montly Events Progress</p>
            </div>
          </div>
        </div>
        <h2>Quick Accsess</h2>
        <div className="buttonbar">
          <button
            className={`accessbutton ${
              this.state.activeButton === "All" ? "active" : ""
            }`}
            onClick={() => this.handleButtonClick("All")}
          >
            All
          </button>
          <button
            className={`accessbutton ${
              this.state.activeButton === "Work" ? "active" : ""
            }`}
            onClick={() => this.handleButtonClick("Work")}
          >
            Work
          </button>
          <button
            className={`accessbutton ${
              this.state.activeButton === "Home" ? "active" : ""
            }`}
            onClick={() => this.handleButtonClick("Home")}
          >
            Home
          </button>
          <button
            className={`accessbutton ${
              this.state.activeButton === "Study" ? "active" : ""
            }`}
            onClick={() => this.handleButtonClick("Study")}
          >
            Study
          </button>
        </div>
        <h2>Overdue</h2>
        <div className="selectionbox">
          <input type="checkbox" id="shortNote" />
          <label htmlFor="shortNote" className="selectiontext">
            <div className="title">Make a Short Note</div>
            <div className="date">Sat, 30 Nov</div>
          </label>
        </div>

        <div className="selectionbox">
          <input type="checkbox" id="shortNote" />
          <label htmlFor="shortNote" className="selectiontext">
            <div className="title">Make a Short Note</div>
            <div className="date">Sat, 30 Nov</div>
          </label>
        </div>
        <h2>Pending</h2>
        <div className="selectionbox">
          <input type="checkbox" id="shortNote" />
          <label htmlFor="shortNote" className="selectiontext">
            <div className="title">Make a Short Note</div>
            <div className="date">Sat, 30 Nov</div>
          </label>
        </div>

        <div className="selectionbox">
          <input type="checkbox" id="shortNote" />
          <label htmlFor="shortNote" className="selectiontext">
            <div className="title">Make a Short Note</div>
            <div className="date">Sat, 30 Nov</div>
          </label>
        </div>
        <h2>Completed</h2>
        <div className="selectionbox">
          <input type="checkbox" id="shortNote" />
          <label htmlFor="shortNote" className="selectiontext">
            <div className="title">Make a Short Note</div>
            <div className="date">Sat, 30 Nov</div>
          </label>
        </div>

        <div className="selectionbox">
          <input type="checkbox" id="shortNote" />
          <label htmlFor="shortNote" className="selectiontext">
            <div className="title">Make a Short Note</div>
            <div className="date">Sat, 30 Nov</div>
          </label>
        </div>
      </div>
    );
  }
}
