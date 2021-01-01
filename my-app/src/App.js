import Header from './Header';
import Home from './Home';

import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        
        </switch>
      </div>
    </Router>

  );
}

export default App;
