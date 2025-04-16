import {PlayersType } from "../types/playersTypes"
import { Link } from "react-router-dom"



const Players = ({ players }: { players: PlayersType }) => {


    return (
        <div className="players-item">
            <Link to={`/players/${players._id}`}>
                <p>{players.category}</p>
                <img src={players.imageUrl} alt="poster" />
                
            </Link>
            

        </div>
    )
}

export default Players