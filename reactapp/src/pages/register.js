import React, { useState } from 'react';
import '../css/register.css';
import { useNavigate } from 'react-router-dom';
import { adduser } from '../components/Api';
import { Link } from 'react-router-dom';
// import axios from 'axios';
function Register () {
  const navigate = useNavigate();
  // const [signupFirstName, setSignupFirstName] = useState('');
  // const [signupLastName, setSignupLastName] = useState('');
  // const [signupEmail, setSignupEmail] = useState('');
  // const [signupPassword, setSignupPassword] = useState('');


  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   // Perform signup authentication logic here

  //   // Example: Check if signup data is valid
  //   if (signupFirstName.trim() === '') {
  //     alert('Please enter a First name.');
  //     return;
  //   }
  //   if (signupLastName.trim() === '') {
  //     alert('Please enter a Last name.');
  //     return;
  //   }

  //   if (signupEmail.trim() === '' || signupPassword.trim() === '') {
  //     alert('Please enter valid signup credentials.');
  //     return;
  //   }

  //   // Navigate to the authenticated page on successful signup
  //   navigate('/Dashboard');
  // };

  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  }
  )

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    console.log(formdata);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await adduser(formdata);
    // const res = await axios.post(`http://localhost:9999/set`,formdata);
      console.log(`${res.status}    ${res.data}`);
      
      navigate('/home');
    }
    catch (error) {
      console.log(error);
    }

    console.log(formdata);
  }

  return (
    <div className='si'>
      <div className='ss'>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            className="in"
            type="text"
            placeholder="First Name"
            // value={signupFirstName}
            id='firstname'
            // onChange={(e) => setSignupFirstName(e.target.value)}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            className="in"
            type="text"
            placeholder="Last Name"
            // value={signupLastName}
            id='lastname'
            // onChange={(e) => setSignupLastName(e.target.value)}
            onChange={handleChange}
            required
            />
            <br></br>
          <input
            className="in"
            type="email"
            placeholder="Email"
            // value={signupEmail}
            id='email'
            // onChange={(e) => setSignupEmail(e.target.value)}
            onChange={handleChange}
            required
            />
            <br></br>
          <input
            className="in"
            type="password"
            placeholder="Password"
            // value={signupPassword}
            id='password'
            // onChange={(e) => setSignupPassword(e.target.value)}
            onChange={handleChange}
            required
            />
            <br></br>
          <button className="b" type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
  );

}
export default Register;