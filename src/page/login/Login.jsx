import React from 'react';
import './login.css';
import { CiUser, CiLock } from 'react-icons/ci';
import { FaUser ,FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='box-container'>
      <div className='background'></div>
      <div className='overlay'></div> 

      <div className='heading-continer' style={{
       
        

      }}>
       <h1 style={{color:'white',fontWeight:300,fontSize:'45px',fontStretch:'expanded',letterSpacing: '10px'}}> SLIDE LOGIN FORM</h1>
      </div>
      
      <div className="container">
        <div style={{ width: '90%', padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'center',padding:'10px' }}>
            <img alt="Your Company" src='/assets/logo.png' style={{ height: '80px', width: 'auto' }} />
          </div>
          {/* <h2 className="title">Black Matrix</h2>
          <h4 className="heading">Technology & Design</h4> */}
          <form>
            <div style={{ marginTop: '30px' }}>
              <div className="input-container">
                <FaUser  size={'15px'} color='black'/>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Email Address"
                  required
                  style={{ backgroundColor: 'white', }}
                  autoComplete="username"
                />
              </div>
              <div className="input-container">
                <FaLock  size={'15px'}  color='black'/>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '15px', lineHeight: '16px', marginTop: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', fontWeight: '400' ,color:'white' }}>
                <input type="checkbox" style={{ width: '12px', height: '12px', marginRight: '8px' }} />
                Keep Me Logged In
              </label>
              {/* <a href="#" style={{ fontWeight: 600, color: 'black', textDecoration: 'none' }}>
                Forgot password?
              </a> */}
            </div>
            <button type="submit">Log In</button>
          </form>
          {/* <p style={{ marginTop: '8px', textAlign: 'center', fontSize: '14px', fontWeight: 600 }}>
            New to Black Matrix?{' '}
            <a href="#" style={{ fontWeight: 600, color: 'black', textDecoration: 'none' }}>
              Sign up here
            </a>
          </p> */}
          <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  fontSize: '12px', 
                  lineHeight: 'normal', 
                  marginTop: '20px', 
                  fontFamily: '"Hind", sans-serif', 
                  fontWeight: 400, 
                  fontStyle: 'normal' ,
                  textTransform:'uppercase'
              }}>
    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
        forget  password?
    </a>
    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
        NEW USER? REGISTER 
    </a>
</div>


            <div style={{ display: 'flex', alignItems:'center',gap:'20px', fontSize: '17px', lineHeight: '16px', marginTop: '10px' }}>
          <p style={{color:'white'}}>Or Login Using :</p>

          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          <img src='https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid' style={{
                width:'30px',
                height:'30px',
                borderRadius:'30px'
               }} />
               </a>


<a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          <img src='https://cdn-icons-png.flaticon.com/512/124/124021.png' style={{
                          width:'30px',
                          height:'30px',
                          borderRadius:'30px'
                        }} />
                </a>

<a href="#" style={{ color: 'white', textDecoration: 'none' }}>
          <img src='https://cdn-icons-png.flaticon.com/512/145/145804.png' style={{
                          width:'30px',
                          height:'30px',
                          borderRadius:'30px'
                        }} />
                </a>
             
             
               
              
            </div>
        </div>
      </div>

      <div className='footer' style={{
        
      }}>
        <p style={{color:'white'}}>
        © 2019 Slide Login Form. All rights reserved | Design by <span style={{fontWeight:"bold"}}>Taran, Abhinav</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
