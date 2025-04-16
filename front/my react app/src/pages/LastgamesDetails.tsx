import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LastgameType } from "../types/lastgamesTypes";
import { getLastgame } from "../api/lastgames";

const LastgameDetails = () => {
    const { id } = useParams();

    const [lastgame, setLastgame] = useState<LastgameType>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchLastgame() {
            if (!id) return;
            try {
                const data = await getLastgame(id);
                setLastgame(data);
            } catch (err) {
                console.error("Error fetching lastgame:", err);
                setError("Failed to load lastgame. Please try again later.");
            }
        }
        fetchLastgame();
    }, [id]); 

    if (error) return <h1>{error}</h1>;
    if (!lastgame) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="lastgame-container">
            <div className="desc">
                <p>{lastgame.title}</p>
                <p>{lastgame.date}</p>
                <p>{lastgame.score}</p>
            </div>
        </div>
    );
};

export default LastgameDetails;