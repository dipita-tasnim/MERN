import { ProductsContext } from "../context/ProductContext";
import { useContext } from "react";

export const useProductsContext = () => {
    const context = useContext(ProductsContext); //const context ei context object ta hocche state & dispatch function
    
    if (!context) {
        throw Error('useProductsContext must be used inside a ProductsContextProvider')
    }                                                                                                                                                                                                                                               

    return context
}