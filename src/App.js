// eslint-disable-next-line
import React, { useState } from "react";
import "./App.css";

// function App() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div className="App" data-test="component-app">
//       <h1 data-test="counter-display">Le counter est {counter}</h1>

//       <button onClick={() => setCounter(counter + 1)} data-test="increment-button">
//         increment counter
//       </button>
//     </div>
//   );
// }

// export default App;

class App extends React.Component {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">Le counter est {counter}</h1>

        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
          data-test="increment-button">
          increment counter
        </button>
      </div>
    );
  }
}

export default App;
