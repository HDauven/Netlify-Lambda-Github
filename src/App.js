import React, { Component } from "react";
import "./App.css";

import UserList from "./components/UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: [] };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => {
        this.setState({ loading: false, msg: json.msg });
      });
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <div className="App">
        <button
          className="btn btn-dark m-1 mt-5"
          onClick={this.handleClick("getusers")}
        >
          {loading ? "Loading..." : "Get Github users"}
        </button>
        <br />
        <UserList users={msg} />
      </div>
    );
  }
}

export default App;
