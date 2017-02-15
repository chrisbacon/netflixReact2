import React from 'react';
import MovieContainer from '../containers/MovieContainer.jsx';

import {Link} from 'react-router';

class Main extends React.Component {

  render() {
    return (
        <div>
          <h4>Main App</h4>
          <ul>
            <li>
              <Link to="/actor">Actor</Link>  
            </li>
            <li>
              <Link to="/director">Director</Link>
            </li>
          </ul>
          {this.props.children}
        </div>
      )
  }

}

export default Main;