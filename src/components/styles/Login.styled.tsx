import styled from "styled-components";

export const LoginWrapper = styled.div`
    height: 100vh;
    display: flex;
    background-color: #ddc38f;
    justify-content: center;
    align-items: center;
    .login-container {
        display: flex;
        align-items: center;
        background-color: #fff;
        flex-direction: column;
        justify-content: space-evenly;
        width: calc(100% / 3);
        height: calc(100% / 1.5);
        border-radius: 25px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
        0 1px 3px rgba(0, 0, 0, 0.08);
        .image-container {
            display: flex;
            justify-content: center;
            width: 125px;
            height: 125px;
            background-color: #fff;
            border-radius: 25px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1),
            0 1px 3px rgba(0, 0, 0, 0.08);
            img {
                max-width: 100px;
            }
        }
        h1 {
            font-weight: normal;
        }
        .email-container, .password-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 325px;
            label {
                margin-bottom: 5px;
            }
            input {
                width: 100%;
                height: 35px;
                border: 1px solid #e8e9ea !important;
                border-radius: 25px;
                padding-left: 15px;
                &:hover, &:active, &:focus {
                    border: 1px solid #a37f39 !important;
                }
            }
        }
        button {
            width: 275px;
            height: 35px;
            color: #fff;
            background-color: #a37f39;
            border-color: transparent;
            border-radius: 25px;
        }
    }
`