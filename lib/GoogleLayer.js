"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@react-leaflet/core");

require("./leaflet.google");

var createLeafletElement = function createLeafletElement(props) {
  var instance = new L.gridLayer.googleMutant(props);
  return {
    instance: instance
  };
};

var _default = (0, _core.createLayerComponent)(createLeafletElement);

exports.default = _default;