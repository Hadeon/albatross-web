import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Home from './routes/Home';
import Login from './routes/Login';
import Group from './routes/Group';
import GroupList from './routes/GroupList';
import Account from './routes/Account';

import rootReducer from './_reducers/rootReducer';
import authReducer from './_reducers/authReducer';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import Layout from './components/Layout';
import './App.css';

// Restructure App.js to include the authentication using:
  // MongoDB Stitch?
  // Firebase?
  // Auth0?

const combinedReducers = combineReducers({ rootReducer, authReducer });
const store = createStore(combinedReducers);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>

          <AuthenticatedRoute path="/Group/:id" component={Group}/>
          <AuthenticatedRoute path="/groups" component={GroupList}/>
          <AuthenticatedRoute path="/Account" component={Account}/>
        </Layout>
      </Router>
    </Provider>

  );
}

export default App;
