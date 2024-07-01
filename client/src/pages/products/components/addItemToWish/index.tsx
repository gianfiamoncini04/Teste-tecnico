import { useAppDispatch } from "../../../../hooks/redux";
import { addItem } from "../../../../redux/wish/wishSlice";
import * as addItemToWish from "./styles"
import heart from "/heart.png"
import { IProducts } from "../../../../types/products"

export const AddItemToWish = (item: IProducts) => {
    const dispatch = useAppDispatch();

    const handleAdd = (item: IProducts) => {
        dispatch(addItem(item));
    };
    return (
        <addItemToWish.Button onClick={() => handleAdd(item)}>
            <img src={heart} alt={heart} width={24} height={24} />
        </addItemToWish.Button>
    );
};