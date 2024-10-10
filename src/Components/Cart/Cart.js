import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartItem";

const Cart = () => {

const cartItems = useSelector(getCartItems)
const totalPrice = useSelector(getTotalPrice);

   
    return (<div>
        <img className="cartIcon" alt='cart' src='cart.png'/>
        <p>Total: ${totalPrice.toFixed(2)} </p>
        {cartItems.map(cartItem => 
        <CartItem key={cartItem.id} cartItem={cartItem}/>)}
        
             
    </div>)
}

export default Cart;