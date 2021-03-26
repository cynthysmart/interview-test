import './App.css';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header />
          <div className="main-content">
            <Main />
          </div>
        </Route>
        <Route exact path='/post/:id'>
          <Header />
          <div className="main-content">
            <Posts />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
