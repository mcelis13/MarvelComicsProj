import React, { Component } from 'react';
import EditComicCard from './EditComicCard.js'
import { Route, Link } from "react-router-dom";


export default class ComicCard extends Component {
  constructor(){
    super()
    this.state = {
      clicked: false,
    }
  }

  handleComicCardClick = () => {
    let clickState = !this.state.clicked
    this.setState({clicked: clickState})
  }

  passComicObj = () => {
    this.props.handlePassingEditObj(this.props.comic)
  }


  renderUnclickedComic = () => {
    return (
          <div className='ui card' onClick={this.passComicObj}>
            <img src={this.props.comic.img} alt={this.props.comic.title} className='ui image' onClick={this.handleComicCardClick}/>
              <div className='content'>
                <div className='header'>{this.props.comic.title}</div>
                  <div className='meta'>
                    <span className='price'>price: {this.props.comic.price}</span>
                  </div>
                <div className='description'>{this.props.comic.description}</div>
              </div>
          </div>
        )
  }

  renderClickedComic = () => {
    return(
      <div onClick={this.passComicObj} className="ui segment">
        <div className="ui two column centered grid" onClick={this.handleComicCardClick}>
          <div className="row">
            <div className="seven wide column">
              <img
                alt={this.props.comic.title}
                className="ui large rectangular image bordered"
                src={this.props.comic.img}
              />
            </div>
            <div className="four wide column">
              <h2>Name: {this.props.comic.title}</h2>
              <p>
                <strong>Description: </strong>
                {this.props.comic.description}
              </p>
              <strong>
                Price: {this.props.comic.price}
              </strong>
              <br />
              <Link to={`comics/${this.props.comic.id}`}>Edit Comic</Link>
              <button className='negative ui button' onClick={() => this.props.handleDeleteComic(this.props.comic)}>Delete</button>
            </div>
          </div>
        </div>
    </div>

    )
  }


  render(){

    return (
      !this.state.clicked ? this.renderUnclickedComic() : this.renderClickedComic()
    )
  }
}
