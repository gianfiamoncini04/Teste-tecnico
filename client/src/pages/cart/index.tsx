import { AddItemToCart } from "./components/addItemToCart/addItemToCart";
import { ItemsList } from "./components/itemsList/itemsList";
import * as CartStyles from "./styles";

export const Cart = () => {
  return (
    <CartStyles.Container>
      <h1>Carrinho</h1>
      <AddItemToCart />
      <ItemsList />
    </CartStyles.Container>
  );
};
