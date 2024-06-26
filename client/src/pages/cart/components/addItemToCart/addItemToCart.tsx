import { useState } from "react";
import { useAppDispatch } from "../../../../hooks/redux";
import { addItem } from "../../../../redux/cart/cartSlice";
import * as Add from "./styles"

export const AddItemToCart = () => {
  const [name, setName] = useState<string>("");
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
    setName("");
  };

  return (
    <Add.Container>
      <Add.Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Add.Button onClick={handleAdd}>Adicionar</Add.Button>
    </Add.Container>
  );
};
