import './CardWidget.css';

import { Link } from 'react-router-dom';
import { useCart } from "../../hooks/useCart";


function CardWidget() {
    const {totalQuantity} = useCart()
    return (
        <Link className="nav-link" to="/cart"><img className="cart-widget_img" src="/public/img/shoppingcart.jpg" alt="" /><span>{totalQuantity}</span></Link>
        //<a className="nav-link"><img className="cart-widget_img" src="/public/img/shoppingcart.jpg" alt="" /><span>{totalQuantity}</span></a>
    )
}

export default CardWidget