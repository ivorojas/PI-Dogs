import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import DogCreate from "./components/DogCreate";
import Detail from "./components/Detail";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/*
                 <Route exact path="/" component={LandingPage} />
            */}

          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={DogCreate} />
          <Route exact path="/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
