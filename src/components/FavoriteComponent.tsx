// src/components/FavoriteComponents
import {FavoritesBottomWrapper} from "./styles/favorites/FavoritesBottom.styled.tsx";


export default function FavoriteComponent() {
    const favourites = [{
        id: 1,
        url: "",
        name: "Gatiño",
    }, {
        id: null,
        url: null,
        name: null,
    }, {
        id: null,
        url: null,
        name: null,
    }]
    return (
        <FavoritesBottomWrapper>
            <div className="favourites-container">
                <div className="favourites-h3">
                    <h3>Drag and drop to add favourites</h3>
                </div>
                <div className="favourites-item-container">
                    {
                        favourites.map((item, index) => {
                            if (item.url) {
                                return (
                                    <div className="favourite-item" key={item.id}>

                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="favourite-item-empty">

                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </FavoritesBottomWrapper>
    )
}