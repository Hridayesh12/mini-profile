import { Router } from "next/router";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
const SERVER = process.env.NEXT_PUBLIC_SERVER_URL;
import api from "./adapter";
const AuthContext = React.createContext({});

const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [userId, setUserId] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [flag, setFlag] = useState(false);

    const logout = async () => {
        const response = await api.get("/auth/logout");
        let user = response.data;
        console.log(user);
        if (user.success == "User logged out") {
            setIsAuthenticated(false);
            router.push("/");
        }
    };

    const login = async (body) => {
        try {
            console.log(body);
            const response = await api.post("/auth/login", body);
            let user = response.data['id'];
            console.log(user);
            if (user) {
                setUserId(user);
                setIsAuthenticated(true);
                res.status(200);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };


    useEffect(() => {
        if (!setIsAuthenticated) {
            router.push("/");
        }
    }, [setIsAuthenticated]);

    const value = {
        user: {
            isAuthenticated: isAuthenticated,
            userId: userId,
        },
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};

export default AuthProvider;
export { useAuth };
