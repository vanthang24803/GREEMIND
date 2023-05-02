import React from "react";
import ReactMapGL from "react-map-gl";

const Box = () => {
  
  return (
    <ReactMapGL
      initialViewState={{
        latitude: 40.73061,
        longitude: -73.935242,
        zoom: 6,
      }}
      className="mapcontainer"
      style={{ width: 400, height: 300}}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken="pk.eyJ1IjoibWF5bmd1eWVuMjQiLCJhIjoiY2xoNXcyYnB6MDA1NTNncXFnNXgxdTdsbyJ9.M6VAhpbrSaGNSgK87CM2rg"
    />
  );
};

export default Box;
