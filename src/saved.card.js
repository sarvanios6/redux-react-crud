import React, {Component} from 'react';

class SavedCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            savedData: props.savedCardData
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.savedCardData) {
            this.setState({
                savedData: nextProps.savedCardData
            });
        }
    }

    removeCards = (id) => {
        this.props.removeCards(id)
    };

    editCards = (id) => {
        this.props.editCards(id)
    };


    render() {
        let savedCards = this.state.savedData.length > 0 ? this.state.savedData.map((item, key)=> {
            return (
                <form className="ui form form_style" key={key}>
                <span className="close" onClick={()=> this.removeCards(item.cardNumber)}
                      title="Close">x</span>
                    <div className="seven wide fields cards_text">
                        <label>{'Card Type: ' + item.cardType}</label>
                    </div>
                    <div className="seven wide fields cards_text">
                        <label>{'Card Number: ' + item.cardNumber}</label>
                    </div>
                    <div className="seven wide fields cards_text">
                        <label>{'Card Name: ' + item.cardName}</label>
                    </div>
                    <div className="seven wide fields cards_text">
                        <label>{'CVC: ' + item.cvc}</label>
                    </div>
                    <div className="seven wide fields cards_text">
                        <label>{'Month: ' + item.month}</label><br/>
                        <label>{'Year: ' + item.year}</label>
                    </div>
                    <div className="seven wide fields">
                        <div className="ui blue button pay_button" onClick={()=> this.editCards(item.cardNumber)}>Pay Now</div>
                    </div>
                </form>
            )
        }) : '';
        return (
            this.state.savedData.length > 0 ? (
                <div className="ui centered aligned grid">
                    <div className="row">
                        Saved Cards
                    </div>
                    <div className="row">
                        <div className="ten wide column Card_saved_type_container">
                            {savedCards}
                        </div>
                    </div>
                </div>) : ''
        );
    }
}

export default SavedCards;
