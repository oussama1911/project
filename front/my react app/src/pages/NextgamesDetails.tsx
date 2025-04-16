import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NextgameType } from "../types/nextgamesTypes";
import { getNextgame } from "../api/nextgames";

const NextgameDetails = () => {
    const { id } = useParams();

    const [nextgame, setNextgame] = useState<NextgameType>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNextgame() {
            if (!id) return;
            try {
                const data = await getNextgame(id);
                setNextgame(data);
            } catch (err) {
                console.error("Error fetching nextgame:", err);
                setError("Failed to load nextgame. Please try again later.");
            }
        }
        fetchNextgame();
    }, [id]); 

    if (error) return <h1>{error}</h1>;
    if (!nextgame) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="nextgame-container">
            <img src={nextgame.imageUrl} alt="" />
            <div className="desc">
                <p>{nextgame.team}</p>
                <p>{nextgame.time}</p>
                <p>{nextgame.category}</p>
            </div>
        </div>
    );
};

export default NextgameDetails;