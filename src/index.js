import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom';
import{
  Nav,
  NavItem,
  Navbar,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Works from './works';
import Contact from './contact';
import * as serviceWorker from './serviceWorker';

const routing=(

  <Router>
   <Navbar color="dark" dark expand="md">
   
   <Nav className="mr-auto">
       <NavItem>
         <NavLink activeClassName="active" className="links" exact to="/">Home</NavLink>
       </NavItem>
       <NavItem>
         <NavLink activeClassName="active" className="links" to="/works">Works</NavLink>
       </NavItem>
       <NavItem>
         <NavLink activeClassName="active" className="links" to="/contact">Contact</NavLink>
       </NavItem>
     </Nav>
   </Navbar>
      <Route exact path="/" component={App} />
      <Route path="/works" component={Works} />
      <Route path="/contact" component={Contact} />
    
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
