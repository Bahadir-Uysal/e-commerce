import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}>
            <HomePage></HomePage>
          </Route>
          <Route path="/shop" component={ShopPage}>
            <ShopPage></ShopPage>
          </Route>
          <Route path="/product/:id" component={ProductPage}>
            <ProductPage></ProductPage>
          </Route>
          <Route>
            <ContactPage path="/contact" component={ContactPage}></ContactPage>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
