import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductListPage from "./ProductListPage";
import PurchasePage from "./PurchasePage";
import NotFound from "./NotFound";

function RouteSwitch() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="RoutesContainer">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/purchase" element={<PurchasePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default RouteSwitch;
