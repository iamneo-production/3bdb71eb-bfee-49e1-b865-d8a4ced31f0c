// ContactUs.js

import React, { useState } from 'react';
import '../css/contact.css'; // Import the CSS file

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your contact form submission logic here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert("Successfully Sent");
  };

  return (
    <div className="contact-us-container">
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
