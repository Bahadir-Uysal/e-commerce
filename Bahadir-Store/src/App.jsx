import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";

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
          <Route><TeamPage path="/team" component={TeamPage}></TeamPage></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
