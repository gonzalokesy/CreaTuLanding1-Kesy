import { useContext } from "react"
import CartContext from "../context/CartContext"
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

function CartContainer() {
    const { cart, clearCart, totalPrice } = useContext(CartContext)
    if (cart.length === 0) {
        return <EmptyCart />;
    }
    return (
        <Container className="py-5">
            <h2 className="mb-4">Tu Carrito</h2>

            {/* Ecnbezado de tabla*/}
            <div className="row border-bottom pb-2 mb-3 d-none d-md-flex fw-bold text-muted">
                <div className="col-2 text-center">Producto</div>
                <div className="col-3">Detalle</div>
                <div className="col-3 text-center">Cantidad</div>
                <div className="col-2 text-center">Subtotal</div>
                <div className="col-2 text-center"></div>
            </div>

            {/* Aplico maps para los itmes renderizando todo lo del componente CartItem */}
            <div className="mb-4">
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            {/* Resumen de compra */}
            <div className="d-flex justify-content-end">
                <div className="col-md-4 bg-light p-4 rounded">
                    <div className="d-flex justify-content-between mb-3 fs-4 fw-bold">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="d-grid gap-2">
                        <Button as={Link} to="/checkout" variant="primary" size="lg">
                            Finalizar Compra
                        </Button>
                        <Button variant="outline-danger" onClick={clearCart}>
                            Vaciar Carrito
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default CartContainer