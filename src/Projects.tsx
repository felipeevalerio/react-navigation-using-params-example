import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProjects } from "./hooks/useProjects";
import { useUser } from "./hooks/useUser";

export function Projects() {
    const { userProjects, getProjectsByUserId } = useProjects();
    const { user, getUserFromURL } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        getUserFromURL();
    }, []);

    useEffect(() => {
        if (user) {
            getProjectsByUserId(user.id);
        }
    }, [user]);

    function handleRedirectToProject(projectId: string) {
        navigate(`/${user?.id}/projects/${projectId}`);
    }

    return userProjects && (
        <ul>
            {userProjects.map(project => {
                return (
                    <button key={project.id} onClick={() => handleRedirectToProject(project.id)}>View project: {project.name}</button>
                )
            })}
        </ul>
    );
};