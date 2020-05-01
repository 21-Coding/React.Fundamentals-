  
import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

KegList.propTypes = {
  kegList: PropTypes.array
}

function KegList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
        <Keg 
          whenClicked = {props.onKegSelection}
          whenPintDrop = {props.onClickingPintDrop}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          ALC={keg.ALC}
          pints={keg.pints}
          key={keg.id}
          id={keg.id} />
      )}
    </React.Fragment>
  );
}
KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  // onClickingPintDrop: PropTypes.func,

};



export default KegList;