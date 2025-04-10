//ei file er kaj hocche webpage refresh charai jeno product add kora jay webpage er form fillup er maddhome.

import { createContext, useReducer } from "react";

export const ProductsContext = createContext();

export const ProductsReducer = (state, action) => { //state:before change, action:after change(add/delete/change/update)
    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                products: action.payload
            }
        case "CREATE_PRODUCT":
            return {
                products: [action.payload, ...state.products] //state.products mane hocche aager products gulo thakbe ar action.payload diye new products add hobe
            }
        case "DELETE_PRODUCT":
            return {
                products: state.products.filter((p) => p._id !== action.payload._id) //p indicates product. product jodi exist kore taholei delete hobe
            }
        default:
            return state
    }
}


export const ProductsContextProvider = ({ children }) => {  //children hocche index.js file er app component
    const [state, dispatch] = useReducer(ProductsReducer, { //state: before change, dispatch: after change
        products: null
    });

    // dispatch({type: "SET_PRODUCTS", payload: [{}, {}]}) //payload e array hishebe modified products gulo thakbe

    return (
        <ProductsContext.Provider value={{...state, dispatch}}>
            { children }
 
        </ProductsContext.Provider>
    )
}