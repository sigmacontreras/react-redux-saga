// src/components/FavoriteComponents
import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {FavoritesBottomWrapper} from "./styles/favorites/FavoritesBottom.styled.tsx";
import {GreatSword} from "../lib/api.ts";
import {setFavourites, allFavourites} from "../store/favouritesSlice.ts";


export default function FavoriteComponent() {
    const dispatch = useDispatch();
    const {favourites} = useSelector((state: RootState) => state.favourites);
    const [lFavourites, lSetFavourites] = useState<GreatSword[]>([
        {id: "null", url: "null", name: "null", index: 0},
        {id: "null", url: "null", name: "null", index: 1},
        {id: "null", url: "null", name: "null", index: 2},
    ]);
    const favouriteRefs = useRef<(HTMLDivElement | null)[]>([]);
    const handleDrop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
        event.preventDefault();
        const greatSword: GreatSword = JSON.parse(event.dataTransfer.getData('greatSword'));
        lSetFavourites((prev) => {
            const updatedFavourites = [...prev];
            updatedFavourites[index] = greatSword;
            return updatedFavourites;
        });
        dispatch(setFavourites({...greatSword, index}))
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    useEffect(() => {
        dispatch(allFavourites());
    }, [dispatch])

    useEffect(() => {
        if (favourites.length > 0) {
            lSetFavourites(favourites);
        }
    }, [favourites]);

    return (
        <FavoritesBottomWrapper>
            <div className="favourites-container">
                <div className="favourites-h3">
                    <h3>Drag and drop to add favourites</h3>
                </div>
                <div className="favourites-item-container">
                    {lFavourites.map((item, index) => {
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