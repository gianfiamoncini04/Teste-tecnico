import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Wishlist } from "../pages/wishlist";
import { Products } from "../pages/products";

export const Router = () => {
  return (
    <Routes>
      {/* Se necessário, adicionar rota */}
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};
