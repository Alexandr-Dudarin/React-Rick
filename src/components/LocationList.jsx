import LocationItem from './LocationItem';

const LocationList = ({ locations, expandedId, onToggle }) => {
    return (
        <div>
            {locations.map((location) => (
                <LocationItem
                    key={location.id}
                    location={location}
                    isExpanded={expandedId === location.id}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default LocationList;

//Презентационный компонент