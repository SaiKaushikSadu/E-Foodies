import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Product from "./pages/Product/Product";
// import Home from "./pages/Home/Home";
// import IndividualProduct from "./pages/IndividualProduct/IndividualProduct";
// import Checkout from "./pages/Checkout/Checkout";
// import Payment from "./pages/Paypal/Payment";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Product = lazy(() => import("./pages/Product/Product"));
const Home = lazy(() => import("./pages/Home/Home"));
const IndividualProduct = lazy(() => import("./pages/IndividualProduct/IndividualProduct"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Payment = lazy(() => import("./pages/Paypal/Payment"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound")); // Optional


function App() {

  const CenteredLoader = () => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </div>
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<CenteredLoader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:id" element={<IndividualProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
