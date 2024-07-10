import styled from "styled-components";

export const FavoritesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.3fr 1.7fr;
    gap: 0 0;
    grid-template-areas: "favorites-top" "favorites-bottom";
    grid-area: favorites-container;
`