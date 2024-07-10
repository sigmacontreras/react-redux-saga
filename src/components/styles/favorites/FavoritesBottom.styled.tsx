import styled from "styled-components";

export const FavoritesBottomWrapper = styled.div`
    grid-area: favorites-bottom;
    display: flex;
    justify-content: center;

    div.favourites-container {
        background-color: #f8bf50;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: calc(100% - 50%);
        height: calc(100% - 16%);
        border-radius: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.08);

        .favourites-h3 {
            width: calc(100% - 20%);
            height: calc(100% - 90%);
            display: flex;
            align-items: flex-end;
        }
        
        div.favourites-item-container {
            width: calc(100% - 20%);
            height: calc(100% - 10%);
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            .favourite-item-empty {
                width: calc(100%);
                height: calc(100% / 3.5);
                background-color: #f9cc73;
                border-radius: 15px;
                box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1),
                inset 0 -4px 6px rgba(0, 0, 0, 0.1);
            }
        }
    }
`