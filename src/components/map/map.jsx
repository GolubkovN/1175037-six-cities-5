import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {offerTypes} from '../../types';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }

  init() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
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

    this.addPins(this.map, icon);
  }

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.map.remove();
    this.init();
  }

  addPins(map, icon) {
    this.props.offers.map((offer) =>
      leaflet
      .marker(offer.coordinates, {icon})
      .addTo(map));
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
