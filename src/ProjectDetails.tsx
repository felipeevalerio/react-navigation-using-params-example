import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProjects } from "./hooks/useProjects";

export function ProjectDetails() {
    const { currentProject, getProjectByURL } = useProjects();
    
    useEffect(() => {
        getProjectByURL();
    }, []);

    return (
        <div>
            <h1>Project details</h1>
            <p>Name: {currentProject?.name}</p>
        </div>
    )
}