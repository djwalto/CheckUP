import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";

// uses Tile Layer and Leaflet Map
// brings center, zoom, casesType, and countries as props
// creates map then uses showDataOnMap to loop
// through countries and draw circles on map
function Map({ countries, casesType, center, zoom }) {
    return (
        <div className="covidmap">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
}

export default Map;