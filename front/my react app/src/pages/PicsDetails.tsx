import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PicsType } from "../types/picsTypes";
import { getPics } from "../api/pics";
 
const PicsDetails = () => {
    const { id } = useParams();

    const [pics, setPics] = useState<PicsType>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPics() {
            if (!id) return;
            try {
                const data = await getPics(id);
                setPics(data);
            } catch (err) {
                console.error("Error fetching pics:", err);
                setError("Failed to load pics. Please try again later.");
            }
        }
        fetchPics();
    }, [id]); 

    if (error) return <h1>{error}</h1>;
    if (!pics) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="pics-container">
            <p>{pics.category}</p>
            <img src={pics.imageUrl} alt="" />

        </div>

    );
};

export default PicsDetails ;