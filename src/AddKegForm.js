import React from 'react';
import PropTypes from 'prop-types'; 
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function AddKegForm(props) {

    function handleAddKegFormSubmission(event) {
        event.preventDefault();
        props.onAddKeg({
            name: event.target.name.value,
            brand: event.target.brand.value,
            price: event.target.price.value,
            ALC: event.target.ALC.value,
            pints: event.target.pints.value,
            id: v4()
         });
    }

    return (
        <React.Fragment>
            <ReusableForm
            formHandler={handleAddKegFormSubmission}
            buttonText="Add Keg" />
        </React.Fragment>
    );
}

AddKegForm.propTypes = {
    onAddKeg: PropTypes.func
}

export default AddKegForm;