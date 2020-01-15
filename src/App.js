import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import "./App.css";
import Content from "./content";
import GoogleSignIn from "./Components/GsignIn";
import { Cart } from "./Components/Cart";
import Sagas from "./Sagas";
// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Sagas);

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
      <Provider store={store}>
        <div className="App">
          {loggedIn || <GoogleSignIn userloggedIn={this.userloggedIn} />}
          <Cart count={totalVote} />
          <header className="App-header">
            {contentArray.map((el, index) => (
              <Content key={el} index={index} totalVoteFn={this.totalVoteFn} />
            ))}
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
