import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DefaultLayout } from 'core/layouts/default.layout';
import { CharactersPage } from 'modules/characters/characters.page';
import { LocationsPage } from 'modules/locations/locations.page';
import { HomePage } from 'pages/home';

export function App() {
  return (
    <Router>
      <DefaultLayout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/characters">
            <CharactersPage />
          </Route>
          <Route path="/locations">
            <LocationsPage />
          </Route>
        </Switch>
      </DefaultLayout>
    </Router>
  );
}
