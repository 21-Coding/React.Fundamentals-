import React from "react";
import PropTypes from "prop-types";


function KegDetails(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h1>Name: {keg.name}</h1>
      <p>Brand: {keg.brand}</p>
      <p>Price: {keg.price}</p>
      <p>ALC: {keg.ALC}</p>
      <p>Pints: {keg.pints}</p>
  
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object

};

export default KegDetails; 