import React from "react";
import PropTypes from "prop-types";


function KegDetails(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h1>{keg.name}</h1>
      <p>{keg.brand}</p>
      <p>{keg.price}</p>
      <p>{keg.ALC}</p>
      <p>{keg.pints}</p>
  
    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object

};

export default KegDetails; 