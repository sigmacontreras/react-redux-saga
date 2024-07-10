// src/components/LoginComponent.tsx
import {useEffect, useState} from "react";
import {LoginWrapper} from "./styles/Login.styled.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";
import {sessionUpdate} from "../store/sessionSlice.ts";

interface LoginComponentProps {
    onLogin?: (v: boolean) => void
}

export default function LoginComponent({onLogin}: LoginComponentProps) {
    const dispatch = useDispatch();
    const {isAuthenticated, isAuthorized} = useSelector((state: RootState) => state.session);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = () => {
        console.log("dispatched sessionUpdate");
        const credentials = {email, password};
        dispatch(sessionUpdate(credentials));
    };

    useEffect(() => {
        console.log("login component useEffect");
        if (isAuthenticated && isAuthorized) {
            if (onLogin) {
                onLogin(true);
            }
        }
    },[isAuthenticated, isAuthorized, onLogin]);

    return (
        <LoginWrapper>
            <div className="login-container">
                <div className="image-container">
                    <img alt="user_profile_avatar" src="/user_profile_avatar_login_account.svg"/>
                </div>
                <h1>Inicia Sesion</h1>
                <div className="email-container">
                    <label htmlFor="email-input">Email</label>
                    <input name="email-input"
                           type="email"
                           onChange={(e) =>
                               setEmail((e.target as HTMLInputElement).value)}/>
                </div>
                <div className="password-container">
                    <label htmlFor="password-input">Password</label>
                    <input name="password-input"
                           type="password"
                           onChange={(e) =>
                               setPassword((e.target as HTMLInputElement).value)}/>
                </div>
                <button type="button" onClick={handleSubmit} disabled={(!email || !password)}>Login
                </button>
            </div>

        </LoginWrapper>
    )
}