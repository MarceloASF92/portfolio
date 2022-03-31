import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { GlobalStyle } from "./styles/global";
import { theme } from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContactUs } from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        {/* Same as */}
        <ToastContainer />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
