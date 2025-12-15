export const fetchLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location")
    .then((response) => response.json())
    .then((data) => {
      return data.results; 
    });
};