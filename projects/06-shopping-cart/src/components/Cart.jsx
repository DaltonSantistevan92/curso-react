
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from './Icons'
import { useId } from 'react'
import '../styles/Cart.css'

function CartItem({ thumbnail, price, title, quantity, addToCart, decreaseFromCart  }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <button onClick={decreaseFromCart}>-</button>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}


export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, decreaseFromCart } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {
                        cart.map(product => (
                            < CartItem
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                decreaseFromCart={() => decreaseFromCart(product)}
                                {...product}
                            />
                        ))}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>

        </>
    )
}