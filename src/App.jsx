import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const HomePage = lazy(
  () =>
    import(
      './pages/HomePage/HomePageContainer'
    ) /* webpackChunkName: "home-page" */,
);
const MoreInfoPage = lazy(
  () =>
    import(
      './pages/MoreInfoPage/MoreInfoPageContainer'
    ) /* webpackChunkName: "more-info-page" */,
);

const App = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/forecast/:id" component={MoreInfoPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
