import React, { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { SearchContext } from "../../contexts/search.context";
import "src/Map";
import "../../utils/fix-map-icon";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import { SimpleAdEntity } from "types";
import {SingleAd} from "./SingleAd";

export const Map = () => {
  const { search } = useContext(SearchContext);
  const [ads, setAds] = useState<SimpleAdEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = fetch("https://localhost:3001/ad/search");
      const data = await (await res).json();

      setAds(data);
    })();
  }, []);

  return (
    <div className="map">
      <h1>Search for: {search}</h1>
      <MapContainer center={[50.2657152, 18.9945008]} zoom={15}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
        />
        {ads.map((ad) => (
          <Marker key={ad.id} position={[ad.lat, ad.lon]}>
            <Popup>
              <SingleAd id={{ad.id}} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
