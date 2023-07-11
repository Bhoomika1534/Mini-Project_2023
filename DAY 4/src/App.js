import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { LoginForm } from "./pages/login/login";
import { RegistrationForm } from "./pages/login/register";
import { ShopContextProvider } from "./context/shop-context";
// import Home from "./Home";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/Home" element={<Home />} /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
