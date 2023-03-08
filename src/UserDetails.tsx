import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "./hooks/useUser";

export function UserDetails() {
    const { user, getUserFromURL } = useUser();
    const navigate = useNavigate();
    
    useEffect(() => {
        getUserFromURL();
    }, []);

    function handleRedirectToProjects() {
        navigate('projects');
    }

    return (
        <div>
            <h1>User details</h1>
            <p>Name: {user?.name}</p>
            <button onClick={handleRedirectToProjects}>View Projects</button>
        </div>
    )
}