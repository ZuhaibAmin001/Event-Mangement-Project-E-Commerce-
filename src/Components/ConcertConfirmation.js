import React, { useState } from 'react';


function ConcertConfirmation() {
  const [ticketCount, setTicketCount] = useState(2);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  
  const increaseCount = () => setTicketCount(ticketCount + 1);
  const decreaseCount = () => {
    if (ticketCount > 1) setTicketCount(ticketCount - 1);
  };

  const bookingConfirmed = () => {
    const city = document.getElementById('groupSelect1').value;
    const paymentMethod = document.getElementById('groupSelect2').value;
    const category = document.getElementById('groupSelect3').value;

    if (ticketCount > 0 && city !== "Empty.." && paymentMethod !== "Empty.." && category !== "Empty..") {
      setConfirmationMessage('Your booking has been confirmed!');
    } else {
      setConfirmationMessage('Please complete all selections.');
    }
  };

  return (
    <div className='confirmation-container'>
      <div className='ticketDetail'>
        <span className='detail-text'>Enter the Amount of tickets</span>
        <div className='counting_details'>
          <button className='addition' onClick={increaseCount}>+</button>
          <span className='count'>{ticketCount}</span>
          <button className='minus' onClick={decreaseCount}>-</button>
        </div>
      </div>

      <div className="options">
        <label htmlFor="groupSelect1" className="input-label">City</label>
        <select className="form-select" id="groupSelect1">
          <option selected>Empty..</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
        </select>
      </div>

      <div className="options">
        <label htmlFor="groupSelect2" className="input-label">Payment Method</label>
        <select className="form-select" id="groupSelect2">
          <option selected>Empty..</option>
          <option value="Credit-Card">Credit-Card</option>
          <option value="Online-Transaction">Online-Transaction</option>
          <option value="On-Receive">On-Receive</option>
        </select>
      </div>

      <div className="options">
        <label htmlFor="groupSelect3" className="input-label">Category</label>
        <select className="form-select" id="groupSelect3">
          <option selected>Empty..</option>
          <option value="VVIP">VVIP</option>
          <option value="VIP">VIP</option>
          <option value="Normal">Normal</option>
        </select>
      </div>

      <button className="submit-btn" onClick={bookingConfirmed}>Confirm Booking</button>

      {confirmationMessage && (
        <div className="confirmation-message">
          {confirmationMessage}
        </div>
      )}
    </div>
  );
}

export default ConcertConfirmation;
