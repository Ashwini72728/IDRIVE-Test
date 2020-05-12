import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import history from "./history";

import Tags from './components/Tags/Tags'
import getStore from "./store/store";


export default () => {
  
  const store = getStore();

  return (
    <div>
  <Provider store={store}>
    <HashRouter history={history}>
      <div className="App-header">
        <Container fluid>
        <Switch>
          <Route exact path="/" component={Tags} />
        </Switch>
      </Container>
      </div>
    </HashRouter>
    </Provider>
    </div>
  );
}