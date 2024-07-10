import styled from "styled-components";

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 10px 0;
    grid-template-areas: "catalog shopping-cart";
`