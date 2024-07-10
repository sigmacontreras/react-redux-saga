// src/components/ItemListComponents.tsx
import {ItemsBottomWrapper} from "./styles/items/ItemsBottom.styled.tsx";
import {useGreatSwords} from '../context/hook.useGreatSwords.ts';
import {useDispatch} from "react-redux";
import {GreatSword} from "../lib/api.ts";
import {addItem} from "../store/shoppingCartSlice.ts";
import React, {useState} from "react";

export default function ItemListComponent() {
    const {greatSwords} = useGreatSwords();
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState('');

    const handleAddToCart = (greatSword: GreatSword) => {
        dispatch(addItem(greatSword));
    };

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(event.target.value);
    };

    const filteredGreatSwords = greatSwords.filter(greatSword =>
        greatSword.name.split("_").join(" ").toLowerCase().includes(filterText.toLowerCase())
    );
    return (
        <ItemsBottomWrapper>
            <h1>Greatswords app</h1>
            <label htmlFor="input-filter">Filter:</label>
            <input name="input-filter" type="text" value={filterText} onChange={handleFilterChange}/>
            <div>
                {filteredGreatSwords.slice(0, 6).map((greatSword) => (
                    <div key={greatSword.id} className="product-container">
                        <img alt="product" src={greatSword.url} />
                        <p>{greatSword.name.split("_").join(" ")}</p>
                        <button onClick={() => handleAddToCart(greatSword)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </ItemsBottomWrapper>
    )
}
