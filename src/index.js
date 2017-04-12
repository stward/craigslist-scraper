import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import HomeContainer from './Containers/HomeContainer';
import ResultsContainer from './Containers/ResultsContainer';
import DetailsDisplay from './Views/DetailsDisplay';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={HomeContainer} />
        <Route path='city' component={ResultsContainer}>
          <Route path="detailId" component={DetailsDisplay} />
        </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
