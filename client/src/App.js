import Home from "./homepage/Home.jsx"
import Navigation from "./navbar/Navbar"
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navigation />
    <Route exact path="/">
      <Home />
    </Route>
      
    <Route exact path="/home">
      
    </Route>
      
  </div>
  );
}

export default App;
