import dataJewelry from "../../data/dataJewelry";
import Jewelry from "./Jewelry";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/jewelriesSlice";

const Jewelries = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (<div>
        <h2>DEFINE YOUR IDENTITY</h2>
        {dataJewelry
        .filter(jewelry => {
            if (selectedCategory === 'COLLECTIONS') return true;
            return selectedCategory === jewelry.category;
        })
             
        .map(jewelry => (
        <Jewelry key={jewelry.id} jewelry={jewelry}/>))
       
        }

    </div>)
}


export default Jewelries;