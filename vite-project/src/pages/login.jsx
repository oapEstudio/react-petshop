import React, { useState, useContext } from 'react';
import logo from "./../assets/logo.jpg";
import { useAuth } from '../context/AuthContext';
import { COLOR_PETSHOP } from '../constant/constant';

const LOGIN = () => {

  
  const {email, setEmail,password, setPassword, handleSubmit,errors} = useAuth();
  


  return (

    <>
      <div className="main">

          <div className="introLeft">        
              <div className="containerA">
                  <img className="logo" src={logo} alt="" />
                  <br />
                  <br />
                  <h3>Trabajo final</h3>
              </div>

              <div className="footerLogin"><p className="txtC">© 2025<span style={{fontWeight: 600}}> PETSHOP - NACHO </span>Trabajo final</p></div>
          </div>

          <div className="introRight">    
            
                  <div className="containerB" >
                      <img className="logo" src="./Assets/img/logo.jpeg" alt=""/>            
            
                        <form
                          onSubmit={handleSubmit}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            maxWidth: '400px',
                            margin: 'auto',
                          }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="formBasicEmail" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                              Email address
                            </label>
                            <input
                              id="formBasicEmail"
                              type="email"
                              placeholder="Enter email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.email ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                              }}
                            />
                            {errors.email && (
                              <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                {errors.email}
                              </div>
                            )}
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="formBasicPassword" style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                              Password
                            </label>
                            <input
                              id="formBasicPassword"
                              type="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              style={{
                                padding: '0.5rem',
                                border: `1px solid ${errors.password ? 'red' : '#ced4da'}`,
                                borderRadius: '0.25rem',
                              }}
                            />
                            {errors.password && (
                              <div style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                                {errors.password}
                              </div>
                            )}
                          </div>

                          <button
                            type="submit"
                            style={{
                              backgroundColor: {COLOR_PETSHOP},
                              color: 'white',
                              padding: '0.75rem',
                              border: 'none',
                              borderRadius: '0.25rem',
                              cursor: 'pointer',
                              fontSize: '1rem',
                            }}
                          >
                            Submit
                          </button>
                        </form>

                    
                        
                  </div>
          </div>


      </div>
    
    </>
  
  );
};

export default LOGIN;
