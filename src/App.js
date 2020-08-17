import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Input from './components/Input'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/layout" component={Layout} />
          <Route exact path="/" component={Input} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
