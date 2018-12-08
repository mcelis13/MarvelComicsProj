import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home.js';
import ShowAllCharacters from './showAllCharacters.js';
import ShowAllComics from './showAllComics.js';
import EditComicCard from './EditComicCard.js';
import EditCharacterCard from './EditCharacterCard.js';

class App extends Component {

    constructor(){
      super()
      this.state = {
        charactersArray: [],
        comicsArray: [],
        editObj: {},
        editCharObj : {},
      }
    }

    componentDidMount(){
      this.fetchCharacters()
      this.fetchComics()
    }

  fetchCharacters = () => {
    fetch('http://localhost:3000/characters')
      .then(resp => resp.json())
      .then(resp => this.setState({charactersArray: resp}))
  }

  fetchComics = () => {
    fetch('http://localhost:3000/comics')
      .then(resp => resp.json())
      .then(resp => this.setState({comicsArray: resp}))
  }


  handlePassingEditObj = (obj) => {
    this.setState({editObj: obj})
    fetch(`http://localhost:3000/comics`)
    .then(resp => resp.json())
    .then(resp => this.setState({comicsArray: resp}))
  }

  handleEditingCharObj = (obj) => {
    this.setState({editCharObj: obj})
    fetch(`http://localhost:3000/characters`)
    .then(resp => resp.json())
    .then(resp => this.setState({charactersArray: resp}))

  }

  handleDeleteCharacter = (obj) => {
    let id = obj.id
      fetch(`http://localhost:3000/characters/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })
    this.fetchCharacters()
  }

  handleDeleteComic = (obj) => {
    let id = obj.id
      fetch(`http://localhost:3000/comics/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })
    this.fetchComics()
  }

  render() {
    return (
      <Router>
        < React.Fragment >
        {/*get the nav bar in here as well as a footer like in your current project
          you will need to get the nav bar from the home.js and put it here and add
          a footer to this with all my info as well also make a page not found feature*/}
        <div className="App">
          <Route exact path='/characters/:id' render={ () => < EditCharacterCard  character = {this.state.editCharObj} characters={this.state.charactersArray} handleEditingCharObj={this.handleEditingCharObj}/>} />
          <Route exact path='/comics/:id' render={ () => < EditComicCard comic={this.state.editObj} handlePassingEditObj={this.handlePassingEditObj}/>} />
          <Route exact path='/characters' render={ () => < ShowAllCharacters handleDeleteCharacter={this.handleDeleteCharacter} characters={this.state.charactersArray} handleEditingCharObj={this.handleEditingCharObj}/> } />
          <Route exact path='/comics' render={ () => < ShowAllComics handleDeleteComic={this.handleDeleteComic} comics={this.state.comicsArray} handlePassingEditObj={this.handlePassingEditObj}/> } />
          <Route exact path='/' render={ () => < Home /> } />
        </div>
        < /React.Fragment >
      </Router>
    );
  }
}

export default App;
