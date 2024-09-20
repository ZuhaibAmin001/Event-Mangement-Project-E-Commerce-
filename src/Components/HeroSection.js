import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div>
      <div className='bg'>
        <div className='herosection'>
          <h3>Pick your Event</h3>
          <div className='events_info'>
            <div className='Weddings'>
              {/* Use Link for navigation */}
              <Link to='/wedding'>Weddings</Link>
              <Link to='/concert'>Concerts</Link>
            </div>
          </div>
        </div>

        <div className='App'>
          <form action='' className='form'>
            <input
              type='name'
              placeholder='Please Enter Name'
              name='Name'
              className='NAME'
            />
            <input
              type='Email'
              placeholder='Please Enter Email'
              name='email'
              className='Mail'
            />
            <button className='btn'>
              <Link to='/contact' type='submit'>
                Enter
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
