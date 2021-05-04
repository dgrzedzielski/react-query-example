import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BaseFetchingIndicator } from 'core/components/base-fetching-indicator';
import { DefaultLayout } from 'core/layouts/default.layout';
import { CharactersPage } from 'modules/characters/characters.page';
import { LocationsPage } from 'modules/locations/locations.page';
import { HomePage } from 'pages/home';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
const isProduction = process.env.NODE_ENV === 'production';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
          {isProduction ? null : <ReactQueryDevtools initialIsOpen={false} />}
          <BaseFetchingIndicator />
        </DefaultLayout>
      </Router>
    </QueryClientProvider>
  );
}
