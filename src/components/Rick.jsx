import { useEffect, useState } from "react";
import { fetchLocations } from "../Api";
import "./Rick.css";


export const Rick = () => {

    const [locations, setLocations] = useState ([]);
    useEffect (() =>{
        fetchLocations().then((data) => {
            console.log(data);
        setLocations(data)
        });
    },[]);

    return <div>
        {locations.map((location) =>{
            return <div key={location.id} className="location">
                <h3>{location.name}</h3>
                </div>
        })}
    </div>
};