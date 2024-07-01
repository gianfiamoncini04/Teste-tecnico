import axios from "axios"
import { useState, useEffect } from "react"
import * as ProductsStyled from "./styles"
import { AddItemToWish } from "./components/addItemToWish"
import { AddItemToCart } from "./components/addItemToCart"
import { IProducts } from "../../types/products"
import { useAppDispatch } from "../../hooks/redux";
import { setProducts } from "../../redux/products/productsSlice"


export const Products = () => {
    const [items, setItems ] = useState<IProducts[]>([])
    const dispatch = useAppDispatch();

    useEffect(() => {
        axios.get<IProducts[]>('products.json')
        .then(response => {
            setItems(response.data),
            dispatch(setProducts(response.data));
        })    
    },[dispatch])
    

    return (
        <ProductsStyled.Container>
            {items.map((product) => (
                <ProductsStyled.List key={product.id}>
                    <p style={{fontSize: "1.55rem", fontWeight: "semibold"}}>{product.name}</p>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <ProductsStyled.Image src={product.image_src} alt={product.image_src} />
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "1rem"}}>
                            <p style={{fontSize: "1.5rem"}}>R$ {product.price}</p>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "1rem"}}>
                                <AddItemToWish id={product.id} name={product.name} image_src={product.image_src} price={product.price} />
                                <AddItemToCart id={product.id} name={product.name} image_src={product.image_src} price={product.price} />
                            </div>
                        </div>
                    </div>
                </ProductsStyled.List>
            ))}
        </ProductsStyled.Container>
    )
}