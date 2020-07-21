import React from 'react';
import './App.css';
import NavBar from './components/screens/NavBar/Navbar';
import FavoriteList from './components/screens/FavoriteList/FavoriteList';
import HeroDetail from './components/screens/HeroDetail/HeroDetail';
import PeopleList from './components/screens/PeopleList/PeopleList';
import Login from './components/screens/Login/Login';
import { Route } from "react-router-dom";


const App = () => {
  return (
      <div className="App_container">
        <NavBar />
        <div className="main_container">
          <Route path="/favorites" component={FavoriteList} exact />
          <Route path="/herodetail/:id" component={HeroDetail} exact />
          <Route path="/" component={PeopleList} exact />
          <Route path="/login" component={Login} exact />
        </div>
      </div>

  );
}

export default App;
