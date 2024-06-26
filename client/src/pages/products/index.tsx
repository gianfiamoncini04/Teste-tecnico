import fakedata from "./fakedata.json"
import * as ProductsStyled from "./styles"

export const Products = () => {
    return (
        <ProductsStyled.Container>
            {fakedata.map((product) => (
                <ProductsStyled.List>
                    <p>{product.name}</p>
                    <ProductsStyled.Image src={product.image_src} alt={product.image_src} />
                    <p>{product.price}</p>
                </ProductsStyled.List>
            ))}
        </ProductsStyled.Container>
    )
}