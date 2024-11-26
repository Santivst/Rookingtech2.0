import './CardWidget.css';

function CardWidget({cartCount}) {
    return (
        <a className="nav-link"><img className="cart-widget_img" src="/public/img/shoppingcart.jpg" alt="" /><span>{cartCount}</span></a>
    )
}

// style={{height: "20px", borderRadius:"10px"}}

export default CardWidget