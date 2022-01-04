import Dog_page from "./components/Dogs_page";
import Cat_page_all from "./components/All_cats";
import Home_page from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import All_birds from "./components/All_birds_";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home_page />
          </Route>
          <Route exact path="/dogs">
            <Dog_page />
          </Route>
          <Route exact path="/cats">
            <Cat_page_all />
          </Route>
          <Route exact path="/birds">
            <All_birds />
          </Route>
        </Switch>
      </Router>

      {/* <Dog_page /> */}
      {/* <Cat_page_all /> */}
    </div>
  );
}

export default App;
