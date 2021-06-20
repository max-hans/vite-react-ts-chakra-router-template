import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { ChakraProvider, Grid, Link } from "@chakra-ui/react";
import Home from "./Routes/Home";
import About from "./Routes/About";
import theme from "./theme";

import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const templateAreas = `
"header"
"content"
"footer"
`;

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Grid
          templateRows="auto 1fr auto"
          templateAreas={templateAreas}
          h="100vh"
          w="100vw"
          m={0}
        >
          <Nav>
            <Link as={RouterLink} to="/">
              home
            </Link>
            <Link as={RouterLink} to="/about">
              about
            </Link>
          </Nav>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Grid>
      </Router>
    </ChakraProvider>
  );
};

export default App;
