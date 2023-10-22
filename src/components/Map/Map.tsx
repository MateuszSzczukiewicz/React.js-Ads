import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "src/Map";
import "../../utils/fix-map-icon";

import "leaflet/dist/leaflet.css";
import "./Map.css";

export const Map = () => {
  return (
    <div className="map">
      <MapContainer center={[50.2657152, 18.9945008]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
        />
      </MapContainer>
    </div>
  );
};
