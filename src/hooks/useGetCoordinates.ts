import { useEffect, useState } from 'react';

interface Coordinates {
  longitude: number | null;
  latitude: number | null;
}

export const useGetCoordinates = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    longitude: null,
    latitude: null,
  });
  useEffect(() => {
    const geolocationAPI = navigator.geolocation;

    if (!geolocationAPI) {
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
