import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import NotFound from './components/NotFound';
import Header from './Header';
import Home from './Home';

const App = () => (
  <Router>
    <div className="font-sans antialiased bg-primary min-h-screen overflow-y-hidden">
      <Header />
      <Switch>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
