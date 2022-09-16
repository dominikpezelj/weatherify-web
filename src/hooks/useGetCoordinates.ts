import { useEffect, useState } from 'react';

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState({
    longitude: 0,
    latitude: 0,
  });
  useEffect(() => {
    const geolocationAPI = navigator.geolocation;

    if (!geolocationAPI) {
      console.log('Geolocation not working!');
      return;
    }
    geolocationAPI.getCurrentPosition(async ({ coords }) => {
      const { latitude, longitude } = coords;
      setCoordinates({
        longitude: longitude,
        latitude: latitude,
      });
    });
  }, []);

  return coordinates;
};
