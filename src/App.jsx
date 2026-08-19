import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Order from "./Pages/Order/Order";
import OrderSuccess from "./Pages/orderSuccess/orderSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </>
  );
}

export default App;
