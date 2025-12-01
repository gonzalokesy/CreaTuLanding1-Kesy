import Button from 'react-bootstrap/Button';
import { Link } from 'react-router';

function EmptyCart() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '60vh' }}>
            <h2 className="mb-4">Tu carrito está vacío 😔</h2>
            <p className="text-muted mb-4">Parece que aún no has elegido tus productos favoritos.</p>
            <Button as={Link} to="/" variant="primary" size="lg">
                Ir a comprar
            </Button>
        </div>
    )
}

export default EmptyCart