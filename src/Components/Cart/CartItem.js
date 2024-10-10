import dataJewelry from "../../data/dataJewelry";
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../redux/cartItem";

const CartItem = ({cartItem}) => {
   
    const jewelries = dataJewelry.find(item => item.id === cartItem.jewelryId)
    const dispatch = useDispatch()

    return (<div>
        <p>{jewelries.name} $ {(jewelries.price * cartItem.quantity).toFixed(2)},  ({cartItem.quantity})</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className="icon" alt='del' src='delete.png'/> 
        </span>     
    </div>)
}

export default CartItem;