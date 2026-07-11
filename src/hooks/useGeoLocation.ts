import { useState, useEffect } from 'react';

export function useGeoLocation(defaultCity: string = "Itaboraí") {
  const [city, setCity] = useState(defaultCity);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data = await response.json();
        if (data && data.city) {
          setCity(data.city);
        }
      } catch (error) {
        console.error('Erro ao buscar geolocalização:', error);
      }
    }
    
    fetchLocation();
  }, []);

  return city;
}
