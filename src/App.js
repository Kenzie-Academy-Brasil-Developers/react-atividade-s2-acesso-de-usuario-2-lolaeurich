import './App.css';

import {members}  from './components/Array';
import {Switch, Route} from "react-router-dom";
import Home from './components/Pages/Home';
import Costumer from './components/Pages/Costumer';
import Company from './components/Pages/Company';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/costumer/:myId">
          <Costumer members={members}/>
          </Route>
          <Route path="/company/:company"> 
          <Company members={members}/>
          </Route>
          <Route path="/" >
          <Home members={members}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
