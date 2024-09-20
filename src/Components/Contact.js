import React from 'react';


function Contact() {
  return (
    <div className='contact-container'>
      <div className='information'>
        <div className='header'>
          <div className='img1'>
            <p></p>
            <span className='contact-title'>Contact Us</span>
          </div>
        </div>

        <div className='contact_information'>
          <div className='ph_nu'>
            <span className='icon'>&#x260E;</span> {/* Phone icon */}
            <span className='num'>0233-445566</span>
          </div>

          <div className='mail'>
            <span className='icon'>&#9993;</span> {/* Email icon */}
            <a className='e_mail' href='mailto:MargillaEvt@gmail.com'>MargillaEvt@gmail.com</a>
          </div>
        </div>

        <div className='loc'>
          <span className='icon'>&#x1F3E0;</span> {/* Location icon */}
          <span className='location'>1234 Mirage Lane, Nowhereville, NA 00000</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
