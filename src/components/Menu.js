import React from 'react'

const Menu = () => {
  return (
    <div className='about'>
     <div className='container'>
      <div className='row'>
        <div className='col-6'>
        <div className='about__imgg'>
          <img src='pizza.jpg' alt='Pizza'></img>
        </div>
        </div>
        <div className='col-6 p-25'>
         <h3>The Pizza Menu</h3>
         <h1>CHICAGO THIN CRUST</h1>
         <p>Chicago style thin crust is baked a bit longer and the crust is baked crispier than a typical New York slice..</p>
         <div className='about__btn'>
          <a href='' className='btn btn-smart'>VIEW MORE</a>
        </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Menu