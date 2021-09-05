import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Actors from './Pages/Actors';
import About from './Pages/About';
import MovieNavbar from './Components/MovieNavbar';

function App() {
  return (
    <Router>
      <MovieNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movie">
          <Movies />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
