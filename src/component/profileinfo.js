import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faEdit,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../css/profileinfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <p>
        <FontAwesomeIcon icon={faUser} className="icon" /> Sahan Hansaja
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />{" "}
        sahanhansaja026@gmail.com
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} className="icon" /> 071-7735442
      </p>
      <a href="#">
        <FontAwesomeIcon icon={faEdit} className="icon" /> Edit
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Log out
      </a>
    </div>
  );
};

export default ProfileInfo;
