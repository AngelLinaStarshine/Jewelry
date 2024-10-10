import { useState } from "react";
import Quantity from "../Cart/Quantity";
import { addItemToCart } from "../../redux/cartItem";
import { useDispatch } from "react-redux";

const Jewelry = ({jewelry}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()


    return (<div>
        <img alt='collection' src={`./${jewelry.img}.png`}/>
        <h1> {jewelry.name} </h1> <h2>$ {jewelry.price} </h2>
        <Quantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={() => {dispatch(addItemToCart({jewelry, quantity}))}}>Add to cart</button>
<p></p>

    </div>)
}

export default Jewelry;

