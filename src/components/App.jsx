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
import { About } from "./About";
import Contacts from "./Contacts";
import Gallary from "./gallary/Gallary";
import Parent from "./parent/Parent";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import{ createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout/Layout";
import NotFound from "./NotFound/NotFound";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";


createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"gallary",element:<Gallary/>},
    {path:"parent",element:<Parent/>},
    {path:"contacts",element:<Contacts/> }
  ]
  }
])

let routers=createBrowserRouter([
  { path:"/",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"gallary",element:<Gallary/>,children:[
      {path:"web",element:<Web/>},
      {path:"mobile",element:<Mobile/>}
    ]},
    {path:"parent",element:<Parent/>},
    {path:"contacts",element:<Contacts/>},
    {path:"*",element:<NotFound/>}
    
  ]
   }
])

export class App extends Component {
  state = {};
  render() {
    return <RouterProvider router={routers}/>;
  }
}
