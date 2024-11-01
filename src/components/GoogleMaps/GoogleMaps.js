import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  minHeight: '400px',
};

const center = {
  lat: 49.958946,
  lng: 18.567705,
};

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB-YnczmIWORiJQabafpuEOYbJpsYr6HVY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMaps;
