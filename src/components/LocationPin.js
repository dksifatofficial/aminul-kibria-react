import MaterialIcon from "material-icons-react";

function LocationPin({ text }) {
  return (
    <div className="pin">
    <MaterialIcon icon="location_on" color="#eb1313" />
    <p className="pin-text">{text}</p>
  </div>
  )
}

export default LocationPin