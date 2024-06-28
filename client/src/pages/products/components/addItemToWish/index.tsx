import * as addItemToWish from "./styles"
import heart from "/heart.png"
import { useAppDispatch } from "../../../../hooks/redux";
import { addItem } from "../../../../redux/wish/wishSlice";
import { data } from "../../../../types/products";

export const AddItemtoWish = ()  => {
    const dispatch = useAppDispatch();

    const handleAdd = () => {
    dispatch(addItem({data}));
    };
    return (
        <addItemToWish.Button onClick={handleAdd}>
            <img src={heart} alt={heart} width={24} height={24} />
        </addItemToWish.Button>
    )
}