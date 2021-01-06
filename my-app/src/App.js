import Header from './Header';
import Home from './Home';

import Produto from './Produto';
import Carrinho from './Carrinho';
import NavLinks from './Navlinks';
import Footer from './Footer';
import ListaLoja from './ListaLoja';


import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/carrinho">
            <Header/>
            <Carrinho/>
           
          </Route>
          <Route path="/produto/:IdProduto">
            <Header/>
            <Produto/>
           
          </Route>
          <Route path="/listaLoja">
            <Header/>
            <ListaLoja/>
           
          </Route>
          <Route path="/">
            <Header/>
            <NavLinks/>
            <Home/>
            <Footer/>
          </Route>
          
        </Switch>
      </div>
    </Router>

  );
}

export default App;
