import { useEffect, useState } from "react";
import { fetchLocations } from "../Api";
import "./Rick.css";

export const Rick = () => {
    const [locations, setLocations] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        fetchLocations().then((data) => {
            setLocations(data);
        });
    }, []);

    const handleToggle = (id) => {
        setExpandedId(prevId => (prevId === id ? null : id));
    };

    return (
        <div>
            {locations.map((location) => (
                <div key={location.id} className="location-container">
                    <div
                        className="location-title"
                        onClick={() => handleToggle(location.id)}
                    >
                        <h3>{location.name}</h3>
                    </div>
                    {expandedId === location.id && (
                        <div className="location-details">
                            <p>Тип: {location.type}</p>
                            <p>Измерение: {location.dimension}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};