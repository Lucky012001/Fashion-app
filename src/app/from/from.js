import React from 'react';
import "./style.css"

const Form = () => {
  return (
    <>
      <div className='container mt-5 form-container last-from'>
        <div className='row align-items-center justify-content-center'>
          <div className='mb-3 col-md-4'>
            <div className="form-group">
              <input type="text" className="form-control" id="name" placeholder="Full Name" />
            </div> 
          </div>
          <div className='mb-3 col-md-4'>
            <div className="form-group">
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
          </div>
          <div className='mb-3 col-md-4'>
            <div className="form-group">
              <input type="tel" className="form-control" id="whatsapp" placeholder="WhatsApp number" />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='mb-3 col-md-12'>
            <div className="form-group">
              <input type="text" className="form-control" id="message" placeholder="Type a message here...." />
            </div>
          </div>
        </div>
        <div className='row justify-content-center '>
          <div className='col-md-4 align-items-center d-flex justify-content-center'>
            <button className='btn btn-primary btn-block '>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className='empty-box'></div>
    </>
  );
}

export default Form;
