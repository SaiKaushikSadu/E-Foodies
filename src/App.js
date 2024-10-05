import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import IndividualProduct from "./pages/IndividualProduct/IndividualProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/product/:id" element={<IndividualProduct></IndividualProduct>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
