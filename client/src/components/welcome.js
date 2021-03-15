import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>

    { /*Main jumbotron for a primary marketing message or call to action*/ }
    <div className="jumbotron">
      <h3 className="display-4">Welcome To Admin Panel!!</h3><br></br><br></br>
      
      <ul className="navbar-nav">
          <li className="nav-item" key={1}>
          <li className="nav-item">
              <Link className="btn btn-warning" to="/posts"><h2>Tasks</h2></Link>
          </li><br></br><br></br>
          <Link className="btn btn-primary" to="/signup"><h5>Sign Up</h5></Link>
            <Link className="btn btn-secondary ml-sm-2" to="/signin"><h5>Sign In</h5></Link>
          </li>
        </ul>
     </div>

  </div>
);