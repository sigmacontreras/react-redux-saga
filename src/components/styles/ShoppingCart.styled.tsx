import styled from "styled-components";

export const ShoppingCartWrapper = styled.div`
    grid-area: shopping-cart;
    background-color: #f1c97b;
    box-shadow: -10px 0 15px -10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        font-size: 2rem;
        width: calc(100% / 1.09);
        align-self: flex-end;
    }

    & > div {
        height: calc(100% - 15%);
        display: flex;
        flex-direction: column;

        & .cart-item {
            height: calc(100% / 4);
            display: flex;
            margin: 10px 20px;

            & .cart-item-img {
                width: calc(100% / 2);
                background-color: #fff;
                border-radius: 25%;
                display: flex;
                align-content: center;
                justify-content: center;
                flex-wrap: wrap;
                img {
                    width: calc(100% - 30%);
                }
            }

            p {
                width: calc(100% / 4);
                text-align: end;
            }

            & .cart-item-delete {
                width: calc(100% / 4);
                display: flex;
                justify-content: flex-end;
                button {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    padding: 0;
                    border: none;
                    background: #f3bc7e;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;

                    svg {
                        width: 25px;
                        height: 25px;
                        fill: #ffffff;
                    }
                }
            }

        }

        & .cart-item-empty {
            height: calc(100% / 4);
            display: flex;
            margin: 10px 20px;
            border-radius: 15px;
            background-color: #f4d395;
            box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1),
            inset 0 -4px 6px rgba(0, 0, 0, 0.1);
            //#f9cc73
        }
    }

    button.buy-button {
        height: 35px;
        border-color: transparent;
        color: #fff;
        background-color: #a37f39 !important;
        border-radius: 25px;
        width: calc(100% - 20%);
        align-self: center;
        bottom: 100px;
    }
`