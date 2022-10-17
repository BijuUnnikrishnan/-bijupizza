import React from 'react'

const About = () => {
  return (
    <div className='about'>
     <div className='container'>
      <div className='row'>
        <div className='col-6 p-25'>
         <h3>About us</h3>
         <h1>Welcome to MAESTRO PIZINNI</h1>
         <p>Some of these pizzeria slogans are puns or plays-on-words. 
             And some instead use hyperbole to imply that “nothing is more important than pizza”.</p>
         <div className='about__btn'>
          <a href='' className='btn btn-smart'>READ MORE</a>
        </div>
        </div>
        <div className='col-6'>
        <div className='about__img'>
          <img src='pizzaa.jpg' alt='Pizza'></img>
        </div>

        </div>
      </div>
     </div>
    </div>
  )
}

export default About