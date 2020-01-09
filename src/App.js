import React from "react";
import "./App.css";
import Content from "./content";
import GoogleSignIn from "./Components/GsignIn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }
  userloggedIn = val => {
    this.setState({
      loggedIn: val
    });
  };
  render() {
    const contentArray = [1, 2, 3, 4, 5];
    const { loggedIn } = this.state;
    return (
      <div className="App">
        {loggedIn || <GoogleSignIn userloggedIn={this.userloggedIn} />}
        <header className="App-header">
          {contentArray.map((el, index) => (
            <Content key={el} index={index} />
          ))}
        </header>
      </div>
    );
  }
}

export default App;
