import React, { Component } from 'react';
import './MemoryCard.css'

class Card extends Component {

	constructor(props) {
		super(props);
		this.state = {isFlipped: false};

	}
	clickHandler() {
		this.setState({
			isFlipped: !this.state.isFlipped
		})
	}

	render() {
		var cardClass = "MemoryCardInner";
		if (this.props.isFlipped) {
		    cardClass += " flipped";
		}
		return (
		    <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
		        <div className={cardClass}>
		            <div className="MemoryCardBack">
		                <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" />
		            </div>
		            <div className="MemoryCardFront">{this.props.symbol}</div>
		        </div>
		    </div>
		);
	}
}

export default Card;