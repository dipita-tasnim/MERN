import { useEffect } from "react"
import { useProductsContext } from "../hooks/useProductsContext"

//components
import ProductDetails from "../components/ProductDetails"
import ProductForm from "../components/ProductForm"


const Home = () => {
    // const [products, setProducts] = useState([]) //setProducts function ja return korbe oita products e store hobe

    const {products, dispatch} = useProductsContext()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("/api/products")//string akare fetch hobe [ekta string e shob kichu ekshathe thakbe porpor lege lege thaka obsthay]
            const json = await response.json(); //string theke json format e convert hobe [shundoe kore alada alada array hishebe ekekta product detail show hobe postman e jevabe show kore]

            if (response.ok) {
                // setProducts(json.data) //ekhane shobgulo products er details array hishebe ache
                dispatch({type: "SET_PRODUCTS", payload: json})
            }
        }
        
        fetchProducts()
    }, [])


    return (
        <div className="home">
            <div className="products">
                {products && products.map((product) => ( //map hocche kind of for loop er moto kaj korche. map(product) ei product hocche variable. Evabe puro line ta diye bojhacche products e jodi kichy thake & then map ta kaj korbe
                    <ProductDetails key={product._id} product={product} />
                ))}
            
            </div>
            <ProductForm />
        </div>
    )   
}

export default Home



