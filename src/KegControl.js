import React from 'react'; 
import KegDetails from './KegDetails.js'
import KegList from './KegList.js'
import AddKegForm from './AddKegForm.js'

class KegControl extends React.Component {

  
        constructor(props) {
            super(props);
            this.state = {
                formVisibleOnPage: false,
                masterKegList: [],
                selectedKeg: null
            };
        }

        handleClick = () => {
            if (this.state.selectedKeg !== null) {
                this.setState({
                    formVisibleOnPage: false,
                    selectedKeg: null
                });
            } else {
                this.setState(prevState => ({
                    formVisibleOnPage: !prevState.formVisibleOnPage
                }));
            }
        }
        handleAddingKegToList = (newKeg) => {
            const newMasterKegList = this.state.masterKegList.concat(newKeg);
            this.setState({
                masterKegList: newMasterKegList,
                formVisibleOnPage: false
            });
        }


        handleChangingSelectedKeg = (id) => {
            const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id) [0];
            this.setState({ selectedKeg: selectedKeg });
        }

        handlePintDrop = (id) => {
            const currentlySelectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
            const newPintOfKeg = currentlySelectedKeg.pints - 1;
            const updatedKeg = {...currentlySelectedKeg, pints: newPintOfKeg};
            const previousKegList = this.state.masterKegList.filter(keg => keg.id !== id);
            this.setState({
              masterKegList: [...previousKegList, updatedKeg],
              selectedKeg: updatedKeg
            });
          }

        render() {
            let currentVisibleState = null;
            let buttonText = null;

            if (this.state.selectedKeg != null) {
                currentVisibleState = <KegDetails
                keg = {this.state.selectedKeg} />
                buttonText = "Return to Kegs";
            } else if (this.state.formVisibleOnPage) {
                currentVisibleState = <AddKegForm onAddKeg = {this.handleAddingKegToList} />
                buttonText = "Return to Keg List";

            } else {
                currentVisibleState = <KegList
                kegList={this.state.masterKegList}
                onKegSelection={this.handleChangingSelectedKeg} 
                onClickingPintDrop={this.handlePintDrop} />
            buttonText = "Add new Keg";

            }

            return (
                <React.Fragment>
                    {currentVisibleState}
                    <button onClick ={this.handleClick}>
                    {buttonText}
                    </button>
                </React.Fragment>
            );
        }


    }


export default KegControl;