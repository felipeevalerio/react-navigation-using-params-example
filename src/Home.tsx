import { useNavigate } from "react-router-dom";
import { useUser } from "./hooks/useUser";

export function Home() {
    const navigate = useNavigate();
    const { users } = useUser();

    function handleRedirectToUserDetails(userId: string) {
        navigate(`/${userId}`);
    }

    return (
        <>
            <h1>HOME</h1>
            <div>
                {users.map(user => {
                    return (
                        <button onClick={() => handleRedirectToUserDetails(user.id)} key={user.id}>View details: {user.name}</button>
                    )
                })}
            </div>
        </>
    );
}