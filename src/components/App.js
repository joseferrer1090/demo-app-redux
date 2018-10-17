import React, { Component } from "react";
import CharacterList from "./CharacterList";
import HeroresList from "./HeroesList";
import "./../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className=""> SuperSquad </h2>
        <CharacterList />
        <HeroresList />
      </div>
    );
  }
}
export default App;
