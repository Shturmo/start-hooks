import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState();

    const handleLogIn = () => {
        localStorage.setItem("user", "hello");
        checkAuth();
    };
    const handleLogOut = () => {
        localStorage.removeItem("user");
        checkAuth();
    };

    const checkAuth = () => {
        if (localStorage.getItem("user")) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                onLogIn={handleLogIn}
                onLogOut={handleLogOut}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withAuth;
