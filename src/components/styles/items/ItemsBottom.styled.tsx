import styled from "styled-components";

export const ItemsBottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: items-bottom;
    width: 80%;
    h1 {
        width: calc(100% / 1.09);
        font-size: 4rem;
        align-self: flex-end;
        margin-bottom: 10px;
    }
    label {
        width: calc(100% / 1.09);
        align-self: flex-end;
    }
    input {
        width: calc(100% / 1.09);
        align-self: flex-end;
        border: 1px solid #f1c97b;
        border-radius: 15px;
        height: 35px;
        padding: 15px;
        margin: 10px 0;
        &:hover {
            border-color: #a37f39 !important;
        }
    }
    & > div {
        width: calc(100% / 1.09);
        height: 66%;
        display: flex;
        flex-wrap: wrap;
        align-self: flex-end;
        background-color: #f1c97b;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.08);
        .product-container {
            width: calc(100% / 3);
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            img {
                height: calc(100% - 60%);
                align-self: center;
            }
            p {
                width: calc(100% - 20%);
                margin: 10px 0;
                align-self: center;
            }
            button {
                height: 35px;
                border-color: transparent;
                color: #fff;
                background-color: #a37f39 !important;
                border-radius: 25px;
                width: calc(100% - 20%);
                align-self: center;
            }
        }
    }
`;