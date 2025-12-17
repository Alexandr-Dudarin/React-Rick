import React from 'react';

const LocationItem = ({ location, isExpanded, onToggle }) => {
    return (
        <div className="location-container">
            <div
                className="location-title"
                onClick={() => onToggle(location.id)}
            >
                <h3>{location.name}</h3>
            </div>
            {isExpanded && (
                <div className="location-details">
                    <p>Тип: {location.type}</p>
                    <p>Измерение: {location.dimension}</p>
                </div>
            )}
        </div>
    );
};

export default LocationItem;

//Презентационный компонент