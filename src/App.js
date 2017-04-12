import React, {Component} from 'react';
import {container} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
