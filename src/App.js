import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.css';
import 'semantic-ui-css/semantic.min.css';
import CardType from './new.card';
import SavedCards from './saved.card';
import {connect} from 'react-redux'
import {addCardData, deleteCardData,editCardData,updateCardData} from './action/action'

class App extends Component {

    removeSavedCard = (id) => {
        this.props.dispatch(deleteCardData(id));
    };

    editCard = (id) => {
        this.props.dispatch(editCardData(id));
    };

    savedCard = (cardData) => {
        this.props.dispatch(addCardData(cardData));
    };
    updatedCard = (cardData) => {
        this.props.dispatch(updateCardData(cardData));
    };

    render() {
        const {cardData,cardEditData} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <CardType savedCardData={cardData} savedCard={this.savedCard} updatedCard={this.updatedCard} cardEditData={cardEditData}/>
                <SavedCards savedCardData={cardData} editCards={this.editCard} removeCards={this.removeSavedCard}/>
            </div>
        );
    }
}

function mapStatetoProps(store) {
    return {
        cardData: store.manipulateData.cardData,
        cardEditData: store.manipulateData.cardEditData,
    }
}

export default connect(mapStatetoProps)(App)
