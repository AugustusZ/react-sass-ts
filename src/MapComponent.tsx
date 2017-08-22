import * as React from 'react';
import './MapComponent.css';

class MapComponent extends React.Component {
  render() {
    return (
      <div className="MapComponent">
        <p>Map Component</p>
        <div id="mapView" />
      </div>
    );
  }
}

export default MapComponent;
