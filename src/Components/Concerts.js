import React from 'react'
import { Link } from 'react-router-dom';

function Concerts() {
  return (
    <div>
      <div>
        <div className='Concert_Navbar'>
        <div className='Concert_Navbarinfo'>
        <div className='Concert_info'>
            Up Comming Events
        </div>
      </div>
      <div className='Concert_BOX'>
      <div className='Concert_boxes'>
      
            <Link to='/concert-confirmation' className='Concert_box1'>
            
                <button >Aur Concert</button>
            </Link>
            <Link to="/concer-confirmation" className='Concert_box2'>
                <button >Junnon Concert </button>
            </Link>
            <Link to='/concert-confirmation' className='Concert_box3'>
            <button >Atif Aslam Concert </button>
                
            </Link>
            <Link to='/concert-confirmation' className='Concert_box4'>
            <button >Asim Azhar Concert</button>
                
            </Link>
            <Link to='/concert-confirmation' className='Concert_box5'>
                <button >Aima Baigh Concert</button>
            </Link>
            <Link to='/concert-confirmation' className='Concert_box6'>
                <button >Young Stunners Concert</button>
            </Link>
        </div>
      </div>
      
    </div>
        </div>
    </div>
  )
}   

export default Concerts