import React from 'react';
import routes from './router'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './pages/layout';
import { demoConfig } from '@/config/demoConfig'
import 'lib-flexible'


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routes.map((v, i) => {
            return (
              <Route
                key={i}
                component={v.component}
                path={v.path}
                exact={v.exact}
              />
            )
          })}
        </Switch>
      </Layout>
    </Router>
  );
}


export default App;
