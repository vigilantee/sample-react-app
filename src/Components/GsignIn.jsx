import React from "react";
import { GoogleLogin } from "react-google-login";
import { CLIENT_ID } from "../constants";

const responseGoogle = (resp, callBack) => {
  console.log("aaya yaha pr.......", resp, callBack);
  callBack(true);
  return true;
};

const GoogleSignIn = props => {
  const { userloggedIn } = props;
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={resp => responseGoogle(resp, userloggedIn)}
        onFailure={resp => responseGoogle(resp, userloggedIn)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleSignIn;
