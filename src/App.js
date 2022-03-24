import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import TeamDetails from './views/Teams/TeamDetails';
import Teams from './views/Teams/Teams';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/teams/:id'>
            <TeamDetails />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
