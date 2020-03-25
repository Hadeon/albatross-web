import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from 'mongodb-stitch-browser-sdk';

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

require('dotenv').config({ path: `../.env` });

const combinedReducers = combineReducers({ rootReducer, authReducer });
const store = createStore(combinedReducers);

function App() {

  const client = Stitch.initializeDefaultAppClient(process.env.REACT_APP_STITCH_ID);

  const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('albatross');

  client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
    db.collection('groups').find({groupName: 'Family'}, { limit: 100}).asArray()
  ).then(docs => {
      console.log("Found docs", docs)
      console.log("[MongoDB Stitch] Connected to Stitch")
  }).catch(err => {
    console.error(err)
  });

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
