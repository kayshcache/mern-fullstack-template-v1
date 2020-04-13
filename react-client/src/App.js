import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Footer from './Footer';
import { useAuth0 } from './react-auth0-spa';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import ManageThings from './pages/ManageThings';


const App = () => {
  const { loading } = useAuth0();

  return loading ? <div>Loading...</div> : (
  <div>
      <Router >
        <NavBar />
	<Container maxWidth="lg">
	  <Switch>
	    <Route exact path="/" component={Home} />
	    <Route path="/about" component={About} />
            <PrivateRoute path="/profile" component={Profile} />
	    <PrivateRoute path="/things" component={ManageThings} />
	  </Switch>
          <Footer />
        </Container>
      </Router>
  </div>
  );
};

export default App;
