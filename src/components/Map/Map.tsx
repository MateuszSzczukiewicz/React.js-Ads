import React, { useContext, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { SearchContext } from "../../contexts/search.context";
import "src/Map";
import "../../utils/fix-map-icon";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export const Map = () => {
  const { search } = useContext(SearchContext);

  useEffect(() => {
    console.log("Make request to search for", search);
  }, [search]);

  return (
    <div className="map">
      <h1>Search for: {search}</h1>
      <MapContainer center={[50.2657152, 18.9945008]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
        />
      </MapContainer>
    </div>
  );
};
