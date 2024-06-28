import { data } from "../../types/products";
import * as ProductsStyled from "./styles"
import { AddItemtoWish } from "./components/addItemToWish"
import { RemoveItemToWish } from "./components/removeItemToWish"

export const Products = () => {
    return (
        <ProductsStyled.Container>
            {data.map((product) => (
                <ProductsStyled.List key={product.id}>
                    <p style={{fontSize: "1.55rem", fontWeight: "semibold"}}>{product.name}</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <ProductsStyled.Image src={product.image_src} alt={product.image_src} />
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "1rem"}}>
                            <p style={{fontSize: "1.5rem"}}>R$ {product.price}</p>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
                                <AddItemtoWish />
                                <RemoveItemToWish />
                            </div>
                        </div>
                    </div>
                </ProductsStyled.List>
            ))}
        </ProductsStyled.Container>
    )
}