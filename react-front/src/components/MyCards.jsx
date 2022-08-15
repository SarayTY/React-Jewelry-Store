import React from "react";
import cardService from "../frontServices/cardServices";
import PageHeaderTitle from "./common/pageHeaderTitle";
import Card from "./Card-client";
import {NavLink} from "react-router-dom";
import "../css/myCards.css";

class MyCards extends React.Component {
  state = {
    cards:[],
  };

  deleteCards = async(_id) => {
      const {data} = await cardService.deleteCard(_id);
      const filteredCards = this.state.cards.filter(card => card._id !== data._id);
      this.setState({cards: filteredCards});
  } 

  async componentDidMount(){
    const {data} = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards:data });
  }

  render() {
    const { cards } = this.state;

    return (
      <div className="container">
        <PageHeaderTitle title="My Cards" />
        <div className="row">
          <div className="col-12">
            <h5>You can update or delete your cards</h5>
          </div>
        </div>
        <hr />
        <div className="new-card">
          <NavLink className="edit-card-link" to="/createNewBizCard">Create a New Card</NavLink>
        </div>

        <div className="row py-3">
          {cards.length ? (
            cards.map((card) => <Card key={card._id} card={card} deleteCards={this.deleteCards}/>)
          ) : (
            <p>No cards yet...</p>
          )}
        </div>
      </div>
    );
  }
}

export default MyCards;
