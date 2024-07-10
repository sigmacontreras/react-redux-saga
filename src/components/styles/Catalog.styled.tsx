import styled from "styled-components";

export const CatalogWrapper = styled.div`
    background-color: #ddc38f;
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
    grid-template-rows: 1fr;
    gap: 0 0;
    grid-template-areas: "items-container favorites-container";
    grid-area: catalog;
`