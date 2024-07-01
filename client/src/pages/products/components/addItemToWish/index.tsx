import { useAppDispatch } from "../../../../hooks/redux";
import { useSelector } from "react-redux"
import { addItem, getWishItemsState } from "../../../../redux/wish/wishSlice";
import * as addItemToWish from "./styles"
import heart from "/heart.png"
import { IProducts } from "../../../../types/products"

export const AddItemToWish = () => {
    const dispatch = useAppDispatch();
    const items = useSelector(getWishItemsState)

    const handleAdd = (item: IProducts[]) => {
        dispatch(addItem(item));
    };
    return (
        <addItemToWish.Button onClick={() => handleAdd(items)}>
            <img src={heart} alt={heart} width={24} height={24} />
        </addItemToWish.Button>
    );
};