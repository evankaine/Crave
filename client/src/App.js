import Home from "./homepage/Home.jsx"
import Navigation from "./navbar/Navbar"
import Dubstep from "./dubstep/Dubstep"
import House from "./house/House"
import Events from "./events/Events"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navigation />
      
    <Route exact path="/">
      <Home />
    </Route>
      
    <Route path="/House">
      <House />
    </Route>

    <Route path="/Dubstep">
      <Dubstep />
    </Route>
      
    <Route path="/Events">
      <Events />
    </Route>
      
  </div>
  );
}

export default App;
