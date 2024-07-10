// src/components/ItemListComponents.tsx
import {ItemsBottomWrapper} from "./styles/items/ItemsBottom.styled.tsx";
import {useGreatSwords} from '../context/hook.useGreatSwords.ts';
import {useDispatch} from "react-redux";
import {GreatSword} from "../lib/api.ts";
import {addItem} from "../store/shoppingCartSlice.ts";

export default function ItemListComponent() {
    const {greatSwords} = useGreatSwords();
    const dispatch = useDispatch();

    const handleAddToCart = (greatSword: GreatSword) => {
        dispatch(addItem(greatSword));
    };
    return (
        <ItemsBottomWrapper>
            <h1>Greatswords app</h1>
            <label htmlFor="input-filter">Filter:</label>
            <input name="input-filter" type="text"/>
            <div>
                {greatSwords.map((greatSword, index) => {
                    if (index < 6) {
                        return (
                            <div key={greatSword.id} className="product-container">
                                <img alt="product" src={greatSword.url}/>
                                <p>{greatSword.name.split("_").join(" ")}</p>
                                <button onClick={() => handleAddToCart(greatSword)}>Add to Cart</button>
                            </div>
                        )
                    }
                })}
            </div>
        </ItemsBottomWrapper>
    )
}
