import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';
import Header from './components/Header';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import PancakeBot from './projects/pancakebot';
import Barbershop from './projects/barbershop';

const App = () => (
  <Router>
    <div
      className="font-sans antialiased bg-gradient-to-t from-gray-50 to-gray-100
    min-h-screen overflow-hidden"
    >
      <Header />
      <Switch>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/projetos/pancakebot">
          <PancakeBot />
        </Route>
        <Route path="/projetos/barbershop">
          <Barbershop />
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
