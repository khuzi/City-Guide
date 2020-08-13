import React from 'react';

import { Switch , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './hoc/Layout/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import News from './Components/Pages/News/News';
import Contact from './Components/Pages/Contact/Contact';
import Details from './Components/Pages/Details/Details';
import NotFound from './Components/Pages/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/details" component={Details}/>
        <Route  component={NotFound}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
