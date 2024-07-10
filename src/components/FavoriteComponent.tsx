// src/components/FavoriteComponents
import {FavoritesBottomWrapper} from "./styles/favorites/FavoritesBottom.styled.tsx";
import {GreatSword} from "../lib/api.ts";
import React, {useRef, useState} from "react";


export default function FavoriteComponent() {
    const [favourites, setFavourites] = useState<GreatSword[]>([
        {id: "null", url: "null", name: "null"},
        {id: "null", url: "null", name: "null"},
        {id: "null", url: "null", name: "null"}
    ]);
    const favouriteRefs = useRef<(HTMLDivElement | null)[]>([]);
    const handleDrop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        event.preventDefault();
        const greatSword: GreatSword = JSON.parse(event.dataTransfer.getData('greatSword'));
        setFavourites((prev) => {
            const updatedFavourites = [...prev];
            updatedFavourites[index] = greatSword;
            return updatedFavourites;
        });
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
    return (
        <FavoritesBottomWrapper>
            <div className="favourites-container">
                <div className="favourites-h3">
                    <h3>Drag and drop to add favourites</h3>
                </div>
                <div className="favourites-item-container">
                    {favourites.map((item, index) => {
                        return (
                            <div ref={(el) => favouriteRefs.current[index] = el}
                                 key={index}
                                 className={item.url ? "favourite-item" : "favourite-item-empty"}
                                 onDrop={(event) => handleDrop(event, index)}
                                 onDragOver={handleDragOver}>
                                {(item.url !== "null") && (
                                    <img alt="product" src={item.url}/>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </FavoritesBottomWrapper>
    )
}