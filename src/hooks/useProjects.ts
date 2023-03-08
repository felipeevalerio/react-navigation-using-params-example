import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface Project {
    name: string;
    userId: string;
    id: string;
}

const projects: Project[] = [
    {
        name: 'my-project',
        userId: '3125eebb-dd32-4303-a2aa-13f5f289d497',
        id: '3125eebb-dd32-4303-a2aa-13f5'
    },
    {
        name: '2-project',
        userId: '3125eebb-dd32-4303-a2aa-13f5f289d497',
        id: '-a2aa-13f5f289d497'
    },
    {
        name: '2-project',
        userId: '27a3f248-7d80-42a3-86f1-d4fd9e565ca0',
        id: '3219ike9d12kd9012kj1d2'
    },
]

export function useProjects() {
    const [userProjects, setUserProjects] = useState<Project[]>([]);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    const { idProject } = useParams();
    const navigate = useNavigate();
    
    function getProjectsByUserId(userId: string) {
        const filteredProjects = projects.filter(project => project.userId === userId);
        setUserProjects(filteredProjects);
    }

    function getProjectByURL() {
        const project = projects.find(project => project.id === idProject);
        if (project) {
            setCurrentProject(project);
        }
        else {
            navigate(-1);
        }
    }

    return {
        userProjects,
        getProjectsByUserId,
        getProjectByURL,
        currentProject
    };
}