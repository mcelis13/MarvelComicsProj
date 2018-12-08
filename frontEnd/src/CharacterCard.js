import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import EditCharacterCard from './EditCharacterCard.js'


export default class CharacterCard extends Component {

  constructor(){
    super()
    this.state = {
      clicked: false,
    }
  }

  handleCharacterCardClick = () => {
    let clickState = !this.state.clicked
    this.setState({clicked: clickState})
  }

  passCharacterObj = () => {
    this.props.handleEditingCharObj(this.props.character)
  }

  renderUnclickedCharacter = () => {
    return (
      <div className='ui card' onClick={this.passCharacterObj}>
        <img src={this.props.character.thumbnail} alt={this.props.character.name} className='ui image' onClick={this.handleCharacterCardClick} />
          <div className='content'>
            <div className='header'>{this.props.character.name}</div>
              <div className='meta'>
                <span className='price'></span>
              </div>
            <div className='description'>{this.props.character.description}</div>
          </div>
        <div className='extra content'>
        <a>
          <i aria-hidden='true' className='user icon' />
        </a>
        </div>
      </div>

    )
  }

  renderClickedCharacter = () => {
    return (
    <div onClick={this.passCharcterObj} className="ui segment">
      <div className="ui two column centered grid" onClick={this.handleCharacterCardClick}>
        <div className="row">
          <div className="seven wide column">
          <img
            alt={this.props.character.name}
            className="ui large rectangular image bordered"
            src={this.props.character.thumbnail}
          />
          </div>
          <div className="four wide column">
            <h2>Name: {this.props.character.name}</h2>
            <p>
              <strong>Description: </strong>
              {this.props.character.description}
            </p>
            <br />
            <Link to={`characters/${this.props.character.id}`}>Edit Character</Link>
            <button className='negative ui button' onClick={() => this.props.handleDeleteCharacter(this.props.character)}>Delete</button>
          </div>
        </div>
      </div>
  </div>
  )
  }

  render(){
    return (
      !this.state.clicked ? this.renderUnclickedCharacter() : this.renderClickedCharacter()
    )
  }
}
