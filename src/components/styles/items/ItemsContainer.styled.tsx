import styled from "styled-components";

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1.8fr;
    gap: 0 0;
    grid-template-areas:
            "items-top" 
            "items-bottom";
    grid-area: items-container;
`