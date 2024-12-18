import React from "react";
import { Navigate } from "react-router-dom";

type AuthRouteProps = {
    redirect?: string;
    page: React.ReactElement;
    authenticated: boolean;
}

export default function AuthPage({redirect = "/login", page, authenticated}: AuthRouteProps) {
    return (
        authenticated ? (page) : <Navigate replace to={redirect} />
    )
}