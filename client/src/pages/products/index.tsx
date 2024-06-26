import { data } from "../../types/products";
import * as ProductsStyled from "./styles"

export const Products = () => {
    return (
        <ProductsStyled.Container>
            {data.map((product) => (
                <ProductsStyled.List key={product.id}>
                    <p>{product.name}</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "start"}}>
                        <ProductsStyled.Image src={product.image_src} alt={product.image_src} />
                        <div>
                            <p>{product.price}</p>
                        </div>
                    </div>
                </ProductsStyled.List>
            ))}
        </ProductsStyled.Container>
    )
}