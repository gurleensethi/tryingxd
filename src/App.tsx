import React, { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthenticationPage from "./pages/authentication/AuthenticationPage";
import { ThemeProvider, Theme, createMuiTheme } from "@material-ui/core";
import OnboardingPage from "./images/OnboardingPage";

const theme: Theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: { main: "#3C82FF" },
  },
});

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/onboarding" component={OnboardingPage} />
          <Route path="/" component={AuthenticationPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
