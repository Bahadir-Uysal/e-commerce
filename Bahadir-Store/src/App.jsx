import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    // Check for token on app start
    const token = localStorage.getItem('token');
    console.log('Token in localStorage:', token ? 'Yes, token exists' : 'No token found');
    console.log('Token value:', token);
  }, []);

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" exact element={<HomePage/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/AboutUs" element={<AboutUsPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </BrowserRouter>
  );
}

export default App;
