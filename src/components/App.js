// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Component } from "react";
import { Home } from "./Home";
import { About } from "./About";
import Contacts from "./Contacts";
import Gallary from "./gallary/Gallary";
import Parent from "./parent/Parent";

export class App extends Component {
  state = {};
  render() {
    return (
      <>
      <Parent/>
      <Gallary/>
        <Home />
        <About />
        <Contacts />
      </>
    );
  }
}
