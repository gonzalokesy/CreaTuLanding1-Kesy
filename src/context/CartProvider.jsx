import CartContext from './CartContext'
import { useState } from 'react'

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const getCartQuantity = () => cart.reduce(
        (acc, current) => acc + current.count, 0)

    // Agregar productos al carrito 
    const addToCart = (product) => {
        if (isInCart(product.id)) {
            const newCart = cart.map(prod => {
                if (prod.id === product.id) {
                    return { ...prod, count: prod.count + product.count }
                } else {
                    return prod
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, product])
        }
    }

    //Verificar existencia del producto
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    // Vaciar carrito
    const clearCart = () => setCart([])

    // Total de la compra 
    const totalPrice = cart.reduce((acc, prod) => acc + (prod.price * prod.count), 0);

    // Eliminar prodcuto del carrito 
    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    // Incrementar cantidad en el carrito
    const incrementQuantity = (id) => {
        const newCartIncremented = cart.map(prod => {
            if (id === prod.id) {
                return { ...prod, count: prod.count + 1 }
            } else {
                return prod
            }
        })
        setCart(newCartIncremented)
    }

    const decrementQuantity = (id) => {
        const newCartIncremented = cart.map(prod => {
            if (id === prod.id) {
                return { ...prod, count: prod.count - 1 }
            } else {
                return prod
            }
        })
        setCart(newCartIncremented)
    }


    return (
        <CartContext.Provider value={{ getCartQuantity, addToCart, cart, clearCart, totalPrice, removeItem, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider