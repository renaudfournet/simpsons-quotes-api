import React from "react";
import "./App.css";
import DisplayQuote from "./components/DisplayQuote";
import axios from "axios";

const sampleSimpsons = {
  quote:
    "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: sampleSimpsons,
    };

    this.getSimpsons = this.getSimpsons.bind(this);
  }

  getSimpsons() {
    // Send the request
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        this.setState({
          simpsons: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayQuote simpsons={this.state.simpsons} />
        <button type="button" onClick={this.getSimpsons}>
          Get New Quote
        </button>
      </div>
    );
  }
}
export default App;
