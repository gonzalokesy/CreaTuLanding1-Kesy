import Badge from '@mui/joy/Badge';
import styles from '../styles/CartWidget.module.css';
import { useContext } from 'react';
import CartContext from '../context/CartContext'
import { Link } from 'react-router';

function CartWidget() {
    const { getCartQuantity } = useContext(CartContext)
    const quantity = getCartQuantity()
    return (
        <div className={styles.cartContainer}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Badge badgeContent={quantity}>
                    <figure className={styles.cartIcon}>🛒</figure>
                </Badge>
            </Link>
        </div >
    )
};

export default CartWidget