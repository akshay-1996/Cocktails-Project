import './App.css';
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import Header from './component/header';
import SingleCocktail from './pages/SingleCocktail';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/cocktail/:id" component={SingleCocktail}></Route>
      </Switch>
    </div>
  );
}

export default App;
