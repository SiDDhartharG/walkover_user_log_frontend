import React,{useState} from 'react';
import {TextField,Button} from '@mui/material'
function Login(props) {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
       
      });
      function handleChange(event) {
        const { name, value } = event.target;
        setUserDetails({
          ...userDetails,
          [name]: value,
        });
      }
      function handleSubmit(event) {
        event.preventDefault();
    
        const { email, password} = userDetails;
        console.log(userDetails);
      }
    return (
        <div className="login">
        <div className='login-form'></div>
            <TextField label="email" name="email" value={userDetails.email} color="secondary" focused onChange={handleChange}/>
            <TextField label="password" name="password" value={userDetails.password} color="secondary" focused onChange={handleChange}/>
            <Button variant="contained" onClick={handleSubmit}>
         Login
        </Button>
        </div>
    );
}

export default Login;