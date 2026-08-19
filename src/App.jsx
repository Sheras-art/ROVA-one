import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
