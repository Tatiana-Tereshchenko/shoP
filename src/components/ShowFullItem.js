import React, { Component } from 'react'

export class ShowFullItem extends Component {
    componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress = (event) => {
    if (event.key === "Escape") {
        this.props.onShowItem(); 
    }
    };
    render() {
    return (
        <div className="full-item" onClick={this.props.onShowItem}>
            <div>
                <img
                    src={"./img/" + this.props.item.img}
                    onClick={() => this.props.onShowItem(this.props.item)}
                    alt="зображення меблів"/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}₴</b>
                <div className="add-to-card" onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        </div>
    );
    }
}

export default ShowFullItem
