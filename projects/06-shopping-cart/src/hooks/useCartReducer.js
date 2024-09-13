import { useReducer } from "react"
import { CART_ACTION_TYPES, cartInitialState, cartReducer } from "../reducers/cart"

export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: CART_ACTION_TYPES.REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })

    const decreaseFromCart = product => dispatch({
        type: CART_ACTION_TYPES.DECREASE_FROM_CART,
        payload: product
    })

    return { state, addToCart, removeFromCart, clearCart, decreaseFromCart }
}
