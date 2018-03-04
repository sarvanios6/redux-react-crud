import React, {Component} from 'react';


class CardType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardType: 'Visa',
            errorMessage: '',
            savedCardData: props.savedCardData

        }
    }

    selectCardType(e) {
        this.setState({
            cardType: e.target.value,
        });
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.cardEditData !== '') {
            this.setState({
                cardType: nextProps.cardEditData[0].cardType,
                errorMessage: '',
                savedCardData: nextProps.savedCardData
            });
            document.getElementsByName('card_name')[0].value = nextProps.cardEditData[0].cardName;
            document.getElementsByName('card_number')[0].value = nextProps.cardEditData[0].cardNumber;
            document.getElementsByName('card_cvc')[0].value = nextProps.cardEditData[0].cvc;
            document.getElementsByName('card_expire-month')[0].value = nextProps.cardEditData[0].month;
            document.getElementsByName('card_expire-year')[0].value = nextProps.cardEditData[0].year;

        } else {
            this.setState({
                cardType: '',
                errorMessage: ''
            });
            document.getElementsByName('card_name')[0].value = "";
            document.getElementsByName('card_number')[0].value = "";
            document.getElementsByName('card_cvc')[0].value = "";
            document.getElementsByName('card_expire-month')[0].value = "";
            document.getElementsByName('card_expire-year')[0].value = "";
        }
    }


    submitCard = () => {
        this.setState({
            errorMessage: ''
        });
        let cardName = document.getElementsByName('card_name')[0].value;
        let cardNumber = document.getElementsByName('card_number')[0].value;
        let cvc = document.getElementsByName('card_cvc')[0].value;
        let month = document.getElementsByName('card_expire-month')[0].value;
        let year = document.getElementsByName('card_expire-year')[0].value;
        const newArray = this.state.savedCardData.filter((obj) => {
            return obj.cardNumber === cardNumber;
        });
        if (this.state.cardType !== '' && cardName !== '' && cardNumber !== '' && cvc !== '') {
            if (newArray.length === 0) {
                let cardData = {
                    cardType: this.state.cardType,
                    cardName: cardName,
                    cardNumber: cardNumber,
                    cvc: cvc,
                    month: month,
                    year: year
                };
                this.props.savedCard(cardData)
            } else {
                let cardData = {
                    cardType: this.state.cardType,
                    cardName: cardName,
                    cardNumber: cardNumber,
                    cvc: cvc,
                    month: month,
                    year: year
                };
                this.props.updatedCard(cardData);
            }
        } else {
            this.setState({
                errorMessage: 'Please provied all the fields'
            })
        }

    };

    cardNumberValidate(e) {
        let regex = new RegExp("^[0-9]{16}$");
        if (regex.test(e.target.value)) {
            this.setState({
                errorMessage: ''
            });
        } else {
            this.setState({
                errorMessage: 'Please enter valid card number'
            });
        }
    }

    render() {
        return (
            <div className="ui centered aligned grid">
                <div className="row">
                    <div className="ten wide column Card_type_container">
                        <form className="ui form">
                            <div className="field">
                                <div className="inline fields" onChange={this.selectCardType.bind(this)}>
                                    <label>Card Type</label>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input type="radio" value='Visa' name="type" defaultChecked={true}/>
                                            <label>Visa</label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui radio checkbox">
                                            <input type="radio" value='MasterCard' name="type"/>
                                            <label>MasterCard</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fields">
                                <div className="seven wide field">
                                    <label>Name on Card</label>
                                    <input type="text" name="card_name" placeholder="Card Name"/>
                                </div>
                            </div>
                            <div className="fields">
                                <div className="seven wide field">
                                    <label>Card Number</label>
                                    <input type="number" onChange={this.cardNumberValidate.bind(this)}
                                           name="card_number"
                                           maxLength={16} placeholder="Card Number"/>
                                </div>
                                <div className="three wide field">
                                    <label>CVC</label>
                                    <input type="text" name="card_cvc" maxLength="3" placeholder="CVC"/>
                                </div>
                            </div>
                            <div className="fields">
                                <div className="six wide field">
                                    <label>Expiration</label>
                                    <div className="two fields">
                                        <div className="field">
                                            <select className="ui fluid search dropdown" name="card_expire-month">
                                                <option value="">Month</option>
                                                <option value="1">January</option>
                                                <option value="2">February</option>
                                                <option value="3">March</option>
                                                <option value="4">April</option>
                                                <option value="5">May</option>
                                                <option value="6">June</option>
                                                <option value="7">July</option>
                                                <option value="8">August</option>
                                                <option value="9">September</option>
                                                <option value="10">October</option>
                                                <option value="11">November</option>
                                                <option value="12">December</option>
                                            </select>
                                        </div>
                                        <div className="field">
                                            <input type="text" name="card_expire-year" maxLength="4"
                                                   placeholder="Year"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui blue button" onClick={this.submitCard}>Pay Now</div>
                            <div className="error_message">{this.state.errorMessage}</div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardType;
