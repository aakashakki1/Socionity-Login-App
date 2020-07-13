import React, { useState } from "react";
import Profile from "./Profile";
import GoogleLogin from "react-google-login";

var signedIn = false;
export default function App() {
  const [contact, setName] = useState({ name: "", email: "", imgUrl: "" });

  const responseGoogle = response => {
    var newContact = {
      name: response.Qt.Bd,
      email: response.Qt.Au,
      imgUrl: response.Qt.MK
    };
    signedIn = true;
    setName(newContact);
  };
  var myStyle = {
    textAlign: "center",
    color: "#eff1f5",
    fontSize: "4rem"
  };
  return (
    <div className="App">
      {signedIn === false ? (
        <div style={myStyle}>
          <h1>Socionity</h1>
          <GoogleLogin
            clientId="926048332907-rbelehafd81a3ucedp9pmj45h8ohnmgh.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        <Profile
          name={contact.name}
          email={contact.email}
          imgUrl={contact.imgUrl}
        />
      )}
    </div>
  );
}
