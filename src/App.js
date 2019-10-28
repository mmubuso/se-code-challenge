import React from 'react';
import Home from './components/containers/Home/Home';
import Search from './components/containers/Search/Search';
import Navbar from './components/containers/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
   
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
