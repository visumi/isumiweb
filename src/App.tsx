import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';
import Header from './components/Header';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Discordjs from './projects/pancakebot';

const App = () => (
  <Router>
    <div className="font-sans antialiased bg-primary min-h-screen overflow-y-hidden">
      <Header />
      <Switch>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/projetos/pancakebot">
          <Discordjs />
        </Route>
        <Route path="/projetos/barbershop">
          <NotFound />
        </Route>
        <Route path="/projetos">
          <Projects />
        </Route>
        <Route path="/contato">
          <Contact />
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
