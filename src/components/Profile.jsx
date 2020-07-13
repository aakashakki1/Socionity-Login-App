import React from "react";
import "./localStyles/profileStyle.css";
import "./images/twitter.webp";

function Profile(props) {
  return (
    <div>
      <link rel="stylesheet" href="profileStyle.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather&family=Montserrat:ital,wght@1,300&family=Sacramento&family=Montserrat:ital,wght@0,600;1,600&display=swap"
        rel="stylesheet"
      />
      <meta charSet="utf-8" />
      <title> Profile </title>
      <div className="profile">
        <h1 className="heading"> Socionity</h1>
        <img
          className="profilePic"
          src={props.imgUrl}
          alt="img"
          width="315px"
          height="380px"
        />
        <hr align="left" />
        <h1 className="name">{props.name}</h1>
        <h1 className="email">{props.email}</h1>
      </div>
    </div>
  );
}
export default Profile;
