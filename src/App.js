import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Pages
import HomePage from './pages/HomePage/HomePage';
import MoreInfoPage from './pages/MoreInfoPage/MoreInfoPage';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:id" component={MoreInfoPage} />
        </Switch>
      </>
    );
  }
}

export default App;
