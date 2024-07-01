import { useSelector } from "react-redux";
import { getCartItemsState } from "../../../../redux/cart/cartSlice";
import * as ItemsListStyles from "./styles";

export const ItemsList = () => {
  const items = useSelector(getCartItemsState);

  console.log(items)

  return (
    <ItemsListStyles.Container>
      {items.map((item) => (
          <li key={item.id}>
            {item.name} - R$ {item.price}
          </li>
      ))}
    </ItemsListStyles.Container>
  );
};
