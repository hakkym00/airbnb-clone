import "./App.css";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./componenets/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route exact={true} path="/" component={Home} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
