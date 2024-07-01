import { ItemsList } from "./components/itemsList/itemsList"
import * as WishStyles from "./styles"

export const Wishlist = () => {
  return (
    <>
      <WishStyles.Container>
        <h1>Lista de Desejos</h1>
        <ItemsList />
      </WishStyles.Container>
    </>
  );
};
