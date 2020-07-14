import React from "react";
import "./localStyles/profileStyle.css";
import twitterImg from "./images/twitter.webp";
import insta from "./images/insta.png";
import fb from "./images/fb.png";
//import "./images/twitter.webp";

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
        <h1 className="email">({props.email})</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          className="twitter"
          src={twitterImg}
          alt="twi"
          height="45px"
          width="45px"
        />
        <img
          className="fb"
          src={fb}
          alt="facebook"
          height="45px"
          width="45px"
        />
        <img
          className="insta"
          src={insta}
          alt="insta"
          height="45px"
          width="45px"
        />
      </div>
    </div>
  );
}
export default Profile;

