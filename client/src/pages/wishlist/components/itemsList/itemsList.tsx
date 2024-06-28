import { useSelector } from "react-redux";
import { getWishItemsState } from "../../../../redux/wish/wishSlice";
import * as ItemsListStyles from "./styles";

export const ItemsList = () => {
  const items = useSelector(getWishItemsState);

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
