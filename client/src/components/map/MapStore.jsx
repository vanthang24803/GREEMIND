import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const MapStore = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const style = {
    width: windowWidth > 1023 ? "100%" : "100%",
    height: windowWidth > 1023 ? "122vh" : "300px",
  };

  return (
    <ReactMapGL
      initialViewState={{
        latitude: 40.73061,
        longitude: -73.935242,
        zoom: 12,
      }}
      style={style}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken="pk.eyJ1IjoibWF5bmd1eWVuMjQiLCJhIjoiY2xoNXcyYnB6MDA1NTNncXFnNXgxdTdsbyJ9.M6VAhpbrSaGNSgK87CM2rg"
    ></ReactMapGL>
  );
};

export default MapStore;
