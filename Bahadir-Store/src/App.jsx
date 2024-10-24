import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/product/:id" component={ProductPage}>
            <ProductPage></ProductPage>
          </Route>
          <Route path="/shop" component={ShopPage}>
            <ShopPage></ShopPage>
          </Route>
          <Route path="/" component={HomePage}>
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
