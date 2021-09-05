import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Actors from './Pages/Actors';
import About from './Pages/About';
import MovieNavbar from './Components/MovieNavbar';
import Footer from './Pages/Footer';

function App() {
  return (
    <Router>
      <MovieNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Footer />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
