import React from 'react';
import routes from './router'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
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
      </div>

    </Router>
  );
}


export default App;
