import React from 'react'

const Nav = () => {

    return (
      <div className='ui inverted segment'>
        <div className= 'ui inverted secondary menu'>
          <a href='http://localhost:3001' className='active item'>Home</a>
          <a href='http://localhost:3001/characters' className='item'>Characters</a>
          <a href='http://localhost:3001/comics' className='item'>Comics</a>
        </div>
      </div>
    )
}

export default Nav;
