import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Routes} from "../../routes";
import MainScreen from "../main-screen/main-screen";
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import PropertyScreen from "../property-screen/property-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";

const App = (props) => {
  const {hotels} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.MAIN}>
          <MainScreen hotels={hotels} />
        </Route>
        <Route exact path={Routes.LOGIN}>
          <LoginScreen />
        </Route>
        <Route exact path={Routes.FAVORITES}>
          <FavoritesScreen hotels={hotels} />
        </Route>
        <Route exact path={Routes.HOTELS}>
          <PropertyScreen />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default App;
