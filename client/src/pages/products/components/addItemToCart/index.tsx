import { useAppDispatch } from "../../../../hooks/redux";
import { addItem } from "../../../../redux/cart/cartSlice";
import * as addItemToWish from "./styles"
import cart from "/cart.png"
import { IProducts } from "../../../../types/products"

export const AddItemToCart = (item: IProducts) => {
  const dispatch = useAppDispatch();

  const handleAdd = (item: IProducts) => {
    dispatch(addItem(item));
  };

  return (
    <addItemToWish.Button onClick={() => handleAdd(item)}>
            <img src={cart} alt={cart} width={24} height={24} />
    </addItemToWish.Button>
  );
};
