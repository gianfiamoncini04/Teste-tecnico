import * as addItemToWish from "./styles"
import heart from "../../../../../public/heart.png"

export const AddItemtoWish = ()  => {
    return (
        <addItemToWish.Button>
            <img src={heart} alt={heart} width={24} height={24} />
        </addItemToWish.Button>
    )
}