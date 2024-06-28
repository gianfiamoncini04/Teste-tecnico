import * as removeItemToWishStyled from "./styles"
import cart from "../../../../../public/cart.png"

export const RemoveItemToWish = () => {
    return (
        <removeItemToWishStyled.Button>
            <img src={cart} alt={cart} width={24} height={24} />
        </removeItemToWishStyled.Button>
    )
}