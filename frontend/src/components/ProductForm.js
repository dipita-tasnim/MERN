import { useState } from "react"
import { useProductsContext } from "../hooks/useProductsContext"

const ProductForm = () => {
    const {dispatch} = useProductsContext()
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("") 
    const [error, setError] = useState("null")
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const product = {name, brand, price}
        const response = await fetch("/api/products", {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error) //from product.controller.js er error property
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setName("")
            setBrand("")
            setPrice("")
            setError(null)
            setEmptyFields([])
            console.log("new product added", json)
            dispatch({type: "CREATE_PRODUCT", payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new product</h3>

            <label>Product Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}//e means event
                value={name}
                className={emptyFields.includes("title") ? "error" : ""} //true hole error dibe
            />
            <label>Product Brand:</label>
            <input 
                type="text"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                className={emptyFields.includes("brand") ? "error" : ""}
            />
            <label>Product Price:</label>
            <input 
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className={emptyFields.includes("price") ? "error" : ""}
            />
          
            <button>Add Product</button>
            {error.message && <div className="error">{error.message}</div>}

        </form>
    )
}

export default ProductForm