import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'pages/Home';
import ListingPage from 'pages/Listing';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/listing" component={ListingPage} />
    </Switch>
  );
}
