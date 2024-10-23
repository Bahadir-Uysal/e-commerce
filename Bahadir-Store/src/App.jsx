import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/shop">
            <ShopPage></ShopPage>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
