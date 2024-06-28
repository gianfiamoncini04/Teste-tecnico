import { useAppDispatch } from "../../../../hooks/redux";
import { addItem } from "../../../../redux/cart/cartSlice";
import * as addItemToWish from "./styles"
import cart from "/cart.png"

export const AddItemToCart = () => {
  // useDispatch para executar uma ação do carrinho (reducer do cartSlice)
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({
        id: Math.random(),
        name,
        price: (Math.random() * 10).toFixed(2),
      })
    );
  };

  return (
    <addItemToWish.Button onClick={handleAdd}>
            <img src={cart} alt={cart} width={24} height={24} />
    </addItemToWish.Button>
  );
};
