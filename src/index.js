import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import HomeContainer from './Containers/HomeContainer';
import ResultsContainer from './Containers/ResultsContainer';
ReactDOM.render(
  <Router history={browserHistory} >
    <Route path='/' component={App} >
      <IndexRoute component={HomeContainer} />
        <Route path='/results' component={ResultsContainer} />
      </Route>
  </Router>,
  document.getElementById('root')
);
