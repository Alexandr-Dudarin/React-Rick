import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../Api';
import LocationList from './LocationList';

const LocationContainer = () => {
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
            <LocationList
                locations={locations}
                expandedId={expandedId}
                onToggle={handleToggle}
            />
        </div>
    );
};

export default LocationContainer;