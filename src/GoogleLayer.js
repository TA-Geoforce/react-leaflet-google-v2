import { createLayerComponent } from '@react-leaflet/core';
import "./leaflet.google";

const createLeafletElement = (props) => {

  const instance = new L.gridLayer.googleMutant(props);

  return { instance };
}

export default createLayerComponent(createLeafletElement);
