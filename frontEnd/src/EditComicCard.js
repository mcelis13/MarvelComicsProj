import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";




export default class EditComicCard extends Component {

  constructor(){
    super()
    this.state = {
      clicked: false,
      imageUrl: '',
      description: '',
      price: 0
    }
  }

  saveInput = (event) => {
    this.setState({[event.target.name]: event.target.value}, () => console.log(this.state))
  }

  handleEdit = (event) => {
    event.preventDefault();
      let id = this.props.comic.id
      let data = {img: this.state.imageUrl, description: this.state.description, price: this.state.price}
      console.log(data)
      fetch(`http://localhost:3000/comics/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(resp => this.props.handlePassingEditObj(resp))
  }

  creatingEditPageDiv = () => {
    return (
      <div className='ui inverted segment'>
        <form className='ui inverted success form'>
          <div className='equal width fields'>
            <div className='field'>
              <label>Image</label>
              <div className='ui fluid input'>
                <input onChange={this.saveInput} type='text' placeholder='Submit New Image' name='imageUrl' value= {this.state.imageUrl} />
              </div>
            </div>
            <div className='field'>
              <label>Description</label>
              <div className='ui fluid input'>
                <input onChange={this.saveInput} type='text' placeholder='Submit a description' name='description' value={this.state.description} />
              </div>
            </div>
            <div className='field'>
              <label>Price</label>
              <div className='ui fluid input'>
                <input onChange={this.saveInput}type='text' placeholder='Submit a price' name='price' value={this.state.price} />
              </div>
            </div>
          </div>
          <button onClick={this.handleEdit} type='submit' className='ui button' >Update</button>
          <Link to={'/comics'}>Back</Link>
        </form>
        <img className='ui fluid image' src='../marvelEdit.jpeg'/>
      </div>
    )
  }


  render(){
    return(
      this.creatingEditPageDiv()
    )
  }
}
