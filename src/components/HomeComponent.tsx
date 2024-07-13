// src/components/HomeComponents.tsx
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {allGreatSwords} from "../store/greatSwordsSlice.ts"
import {RootState} from "../store/rootReducer";
import {AppWrapper} from "./styles/App.styled.tsx";
import {CatalogWrapper} from "./styles/Catalog.styled.tsx";
import {ItemsContainer} from "./styles/items/ItemsContainer.styled.tsx";
import {ItemsTopWrapper} from "./styles/items/ItemsTop.styled.tsx";
import ItemListComponent from "./ItemListComponent.tsx";
import {FavoritesContainer} from "./styles/favorites/FavoritesContainer.styled.tsx";
import {FavoritesTopWrapper} from "./styles/favorites/FavoritesTop.styled.tsx";
import FavoriteComponent from "./FavoriteComponent.tsx";
import ShoppingCartComponent from "./ShoppingCartComponent.tsx";


export default function HomeComponent() {
    const dispatch = useDispatch();
    const greatSwords = useSelector((state: RootState) => state.data.greatSwords);

    useEffect(() => {
        console.log("dispatched fetchAllGreatSwords useEffect");
        dispatch(allGreatSwords());
    }, [dispatch]);

    return (
        <AppWrapper>
                <CatalogWrapper>
                    <ItemsContainer>
                        <ItemsTopWrapper></ItemsTopWrapper>
                        <ItemListComponent greatSwords={greatSwords}/>
                    </ItemsContainer>
                    <FavoritesContainer>
                        <FavoritesTopWrapper></FavoritesTopWrapper>
                        <FavoriteComponent/>
                    </FavoritesContainer>
                </CatalogWrapper>
                <ShoppingCartComponent/>
        </AppWrapper>
    )
}