import { useProductsContext } from "../hooks/useProductsContext"


const ProductDetails = ({ product }) => {
    const { dispatch } = useProductsContext()
    const handleClick = async () => {
        const response = await fetch("/api/products/" + product._id, {
            method: "DELETE"
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: "DELETE_PRODUCT", payload: json })
        }
    }

    return (
        <div className="product-details"> 
            <h4>{product.name}</h4>
            <p><strong>Brand:</strong>{product.brand}</p>
            <p><strong>Price:</strong>{product.price}</p>
            <p>{product.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default ProductDetails