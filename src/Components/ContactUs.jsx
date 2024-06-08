import React from 'react';
import contactus from '../Assets/Contactus/contactus.jpg'
const ContactUs = () => {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-4 text-start text-success">Contact Us</h1>
      <div className="row">
        {/* Left Part: Image */}
        <div className="col-md-6 mb-4">
          <img 
            src={contactus} 
            className="img-fluid rounded" 
            alt="Contact Us"
          />
        </div>
        {/* Right Part: Form */}
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label text-start text-success d-flex justify-content-start">Full Name</label>
              <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-start text-success d-flex justify-content-start">Email Address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-start text-success d-flex justify-content-start">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn text-start btn-success d-flex justify-content-start">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
