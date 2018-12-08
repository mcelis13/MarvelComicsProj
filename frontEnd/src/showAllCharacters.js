import React, { Component } from 'react';
import Nav from './Nav.js';
import CharacterCard from './CharacterCard.js';
import { Card } from 'semantic-ui-react'


export default class showAllCharacters extends Component {

  render(){
      let characterCards = this.props.characters.map((character) => <CharacterCard key={character.id} character={character} handleDeleteCharacter={this.props.handleDeleteCharacter} handleEditingCharObj={this.props.handleEditingCharObj}/>)
    return (
      <div>
        < Nav />
        <Card.Group itemsPerRow={3}>
          {characterCards}
        </Card.Group>
      </div>
    )
  }
}
