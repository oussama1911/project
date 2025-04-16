import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PlayersType } from "../types/playersTypes";
import { getPlayers } from "../api/players";

const PlayersDetails = () => {
    const { id } = useParams();

    const [players, setPlayers] = useState<PlayersType>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPlayers() {
            if (!id) return;
            try {
                const data = await getPlayers(id);
                setPlayers(data);
            } catch (err) {
                console.error("Error fetching players:", err);
                setError("Failed to load players. Please try again later.");
            }
        }
        fetchPlayers();
    }, [id]); 

    if (error) return <h1>{error}</h1>;
    if (!players) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="players-container">
            <img src={players.imageUrl} alt="" />
            <div className="desc">
                <p>{players.name}</p>
                <p>{players.category}</p>
                <p>{players.number}</p>
                

            </div>
        </div>
    );
};

export default PlayersDetails;