import React from "react";
import "./App.css";
import Content from "./content";

const App = () => {
  const contentArray = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <header className="App-header">
        {contentArray.map(el => (
          <Content key={el} />
        ))}
      </header>
    </div>
  );
};

export default App;
