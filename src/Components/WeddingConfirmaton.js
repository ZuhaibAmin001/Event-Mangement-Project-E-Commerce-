import React ,{useState} from 'react';


function WeddingConfirmaton() {
  const [Confirmationmessage,setConfirmationMessage] = useState('');
  const bookingConfirmed = ()=>{
    const city = document.getElementById('GroupSelect1');
    const payment = document.getElementById('GroupSelect2');
    const guest = document.getElementById('GroupSelect3');
    if(city!= "Empty.." && payment != "Empty.." && guest != "Empty.."){
      setConfirmationMessage("Your booking has been Confirmed");
    }else{
      setConfirmationMessage("Please fill the form")
    }
  }
  return (
    <div className="confirmation-container">
      <h2 className="confirmation-header">Wedding Event Confirmation</h2>
      
      <div className="options">
        <label htmlFor="groupSelect1" className="label">Select City:</label>
        <select className="form-select" id="GroupSelect1">
        <option value="1">Empty..</option>
          <option value="2">Islamabad</option>
          <option value="3">Karachi</option>
          <option value="4">Lahore</option>
          <option value="5">Multan</option>
          <option value="6">Peshawar</option>
        </select>
      </div>
      
      <div className="options">
        <label htmlFor="groupSelect2" className="label">Payment Method:</label>
        <select className="form-select" id="GroupSelect2">
          <option value="" selected disabled>Choose Payment Option</option>
          <option value="1">Empty..</option>
          <option value="2">Credit-Card</option>
          <option value="3">Online-Transaction</option>
        </select>
      </div>
      
      <div className="options">
        <label htmlFor="groupSelect3" className="label">Number of Guests:</label>
        <select className="form-select" id="GroupSelect3">
        <option value="1">Empty..</option>
          <option value="2">100 - 500</option>
          <option value="3">600 - 1000</option>
          <option value="4">1000 - 1500</option>
        </select>
      </div>
      
      <button className="submit-btn" onClick={bookingConfirmed}>Confirm Booking</button>
      {Confirmationmessage && (
        <div className="confirmation-message">
          {Confirmationmessage}
        </div>
      )}
    </div>
  );
}

export default WeddingConfirmaton;
