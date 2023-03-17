import React from 'react'
import './Counter.css'

const Navbar = (props) => {
  return (
<div className="Navbar">
    <h1 className='n-head'>NavBar</h1>
    <span className=' n-count'>{props.counters.filter(c=>c.value>0).length}</span>
    
</div>  )
}

export default Navbar