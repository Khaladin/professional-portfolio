import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import Portfolio from './portfolio';
import TaskAgenda from './task-agenda';
import Signin from './components/task-components/auth/signin';
import Signup from './components/task-components/auth/signup';
import Signout from './components/task-components/auth/signout';
import DisplayTasks from './components/task-components/display-tasks';
import NewPost from './components/task-components/add-task';
import PostShow from './components/task-components/display-task';


import history from './history';
import reducers from './reducers';

const createStoreWithMiddleWare = applyMiddleware(reduxThunk, promise)(createStore);
const store = createStoreWithMiddleWare(reducers);


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Router history={history}>
          <Switch>
            <Route exact path='/' component={Portfolio} />
            <Route path='/taskapp/add-task' component={NewPost} />
            <Route path='/taskapp/display-tasks' component={DisplayTasks} />
            <Route path='/taskapp/display-task/:id' component={PostShow} />
            <Route path='/taskapp/signin' component={Signin} />
            <Route path='/taskapp/signup' component={Signup} />
            <Route path='/taskapp/signout' component={Signout} />
            <Route path='/taskapp' component={TaskAgenda} />


          </Switch>
      </Router>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
