import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator';
//Pages
const AsyncHomePage = lazy(
  () => import('./pages/HomePage/HomePage') /* webpackChunkName: "home-page" */,
);
const AsyncMoreInfoPage = lazy(
  () =>
    import(
      './pages/MoreInfoPage/MoreInfoPage'
    ) /* webpackChunkName: "more-info-page" */,
);

const App = () => (
  <>
    <Suspense fallback={<LoadingIndicator />}>
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/:id" component={AsyncMoreInfoPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
