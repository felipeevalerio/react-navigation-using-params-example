import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export interface User {
    name: string;
    id: string;
}

export const users: User[] = [
    {
        id: '3125eebb-dd32-4303-a2aa-13f5f289d497',
        name: 'Felipe'
    },
    {
        id: '27a3f248-7d80-42a3-86f1-d4fd9e565ca0',
        name: 'Gabriel'
    }
];

export function useUser() {
    const [user, setUser] = useState<User | null>(null);
    const { idUser } = useParams();
    const navigate = useNavigate();

    function getUserFromURL() {
        const userFound = users.find(user => user.id === idUser);
        if (userFound){
            setUser(userFound);
        } else {
            navigate('/');
        }
    }

    return { users, user, getUserFromURL }
}