import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {

    const formStyles = {
        width: '40v',
        margin: 'auto auto',
        backgroundColor: 'transparent',
        padding: '5%',
        marginBottom: '2%'
    }

    return (
        <React.Fragment>
            <div>
                <form onSubmit={props.formHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name' required />
                    <input
                        type='text'
                        name='brand'
                        placeholder='Brand' required />
                    <input
                        type='text'
                        name='price'
                        placeholder='Price' />
                    <input
                        type='number'
                        name='ALC'
                        placeholder='ALC' />
                    <input
                        type='number'
                        name='pints'
                        placeholder='Pints' required />
                    <button className="formButton" type='submit'>{props.buttonText}</button>
                        
                </form>
            </div>
        </React.Fragment>
    );
}

ReusableForm.propTypes = {
    formHandler: PropTypes.func,
    buttonText: PropTypes.string
  };
  
  export default ReusableForm; 