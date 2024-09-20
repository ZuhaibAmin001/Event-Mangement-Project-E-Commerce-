import React from 'react';
import { Link } from 'react-router-dom';

function Wedding() {
  return (
    <div>
      <div className='Navbar'>
        <div className='Navbarinfo'>
          <div className='info'>
            Wedding Events
          </div>
        </div>
        <div className='BOX'>
          <div className='boxes'>
           
            <Link to='/wedding-confirmation' className='box1'>
              <button>Engagement Event</button>
            </Link>
            <Link to='/wedding-confirmation' className='box2'>
              <button>Bridal Shower</button>
            </Link>
            <Link to='/wedding-confirmation' className='box3'>
              <button>Farewell Brunch</button>
            </Link>
            <Link to='/wedding-confirmation' className='box4'>
              <button>Ring Ceremony</button>
            </Link>
            <Link to='/wedding-confirmation' className='box5'>
              <button>Mehndi Event</button>
            </Link>
            <Link to='/wedding-confirmation' className='box6'>
              <button>Bachelors Party</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
