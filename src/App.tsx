import React, { FunctionComponent } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import AuthenticationPage from "./pages/authentication/AuthenticationPage";
import { ThemeProvider, Theme, createMuiTheme } from "@material-ui/core";
import OnboardingPage from "./pages/onboarding/OnboardingPage";
import HomePage from "./pages/home/HomePage";
import CategoryDetailsPage from "./pages/category-details/CategoryDetailsPage";

const theme: Theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: { main: "#3C82FF" },
  },
});

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
          <Route path="/category/:categoryId" component={CategoryDetailsPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/onboarding" component={OnboardingPage} />
          <Route path="/" component={AuthenticationPage} />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
