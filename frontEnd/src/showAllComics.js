import React, { Component } from 'react';
import Nav from './Nav.js';
import ComicCard from './ComicCard.js';
import { Card } from 'semantic-ui-react'



export default class showAllComics extends Component {

  render(){
      let comicArray = this.props.comics.map((comic) => <ComicCard key={comic.title} comic={comic} handleDeleteComic={this.props.handleDeleteComic} handlePassingEditObj={this.props.handlePassingEditObj}/>)
    return (
      <div>
        < Nav />
        <Card.Group itemsPerRow={3}>
          {comicArray}
        </Card.Group>
      </div>
    )
  }
}
