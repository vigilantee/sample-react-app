import React from "react";
import "./App.css";
import Content from "./content";
import GoogleSignIn from "./Components/GsignIn";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      totalVote: 0
    };
  }
  totalVoteFn = val => {
    this.setState({
      totalVote: val
    });
  };
  userloggedIn = val => {
    this.setState({
      loggedIn: val
    });
  };
  render() {
    const contentArray = [1, 2, 3, 4, 5];
    const { loggedIn, totalVote } = this.state;
    return (
      <div className="App">
        {loggedIn || <GoogleSignIn userloggedIn={this.userloggedIn} />}
        <header className="App-header">
          {contentArray.map((el, index) => (
            <Content
              key={el}
              index={index}
              totalVoteFn={this.totalVoteFn}
              totalVote={totalVote}
            />
          ))}
          Total Votes : {totalVote}
        </header>
      </div>
    );
  }
}

export default App;
