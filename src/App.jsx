// import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./customer/components/cart/Cart";
import Checkout from "./customer/components/checkout/Checkout";
import Footer from "./customer/components/footer/Footer";
import Navigation from "./customer/components/navigation/Navigation";
import Order from "./customer/components/order/Order";
import OrderDetails from "./customer/components/order/OrderDetails";
import Product from "./customer/components/product/Product";
import ProductDetails from "./customer/components/productdetails/ProductDetails";
import HomePage from "./customer/pages/homepage/HomePage";
import CustomerRouter from "./routers/CustomerRouter";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRouter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
