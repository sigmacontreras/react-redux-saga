// src/App.tsx
import {useState} from 'react';
import {GlobalStyle} from "./components/styles/Gloabal.style.tsx";
import HomeComponent from "./components/HomeComponent.tsx";
import LoginComponent from "./components/LonginComponent.tsx";

export default function App() {
    // State to track if the user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Handler for successful login
    const handleLogin = (value: boolean) => {
        console.log("login");
        setIsLoggedIn(value);
    };
    return (
        <>
            <GlobalStyle></GlobalStyle>
            {isLoggedIn ? (
                <HomeComponent />
            ) : (
                <LoginComponent onLogin={handleLogin} />
            )}
        </>
    );
}
