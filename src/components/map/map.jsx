import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {offerTypes} from '../../types';

const city = [52.38333, 4.9];
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const zoom = 12;

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.markersGroup = null;
    this.map = null;
  }

  init() {
    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.markersGroup = leaflet.layerGroup().addTo(this.map);

    this.addPins();
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.addPins();
  }

  addPins() {
    this.markersGroup.clearLayers();
    this.props.offers.forEach(({coordinates}) => leaflet.marker(coordinates, {icon}).addTo(this.markersGroup));
  }

  render() {
    return (
      <div id="map" style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerTypes).isRequired,
};

export default Map;
