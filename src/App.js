import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MyTickets from './components/MyTickets';
import DetailTickets from "./components/DetailTickets";

import './style/main.css'
import './style/base.css'
import './style/grid.css'

function App() {

  const [slideIndex, setSlideIndex] = useState(0);
  function plusDivs(n) {
    let newIndex = slideIndex + n;
    if (newIndex >= slides.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    setSlideIndex(newIndex);
  }
  const slides = [
    <div className="mySlides" style={{ backgroundColor: "#ccc", width: "100%", height: "450px" }}>
      <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%" }} className="d-flex">First Slide</h1>
    </div>,
    <div className="mySlides" style={{ backgroundColor: "#ccc", width: "100%", height: "450px" }}>
      <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%" }} className="d-flex">Second Slide</h1>
    </div>,
    // Add more slides here
  ];

  //slide login
  const [slideIndexLogin, setSlideIndexLogin] = useState(0);
  function plusDivsLogin(n) {
    let newIndex = slideIndexLogin + n;
    if (newIndex >= slidesLogin.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = slidesLogin.length - 1;
    }
    setSlideIndexLogin(newIndex);
  }
  const slidesLogin = [
    <div className="mySlides" style={{ backgroundColor: "#ccc", width: "100%", height: "450px", borderBottomRightRadius: "8px", borderTopRightRadius: "8px" }}>
      <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%", margin: "0" }} className="d-flex">First Slide</h1>
    </div>,
    <div className="mySlides" style={{ backgroundColor: "#ccc", width: "100%", height: "450px", borderBottomRightRadius: "8px", borderTopRightRadius: "8px" }}>
      <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%", margin: "0" }} className="d-flex">Second Slide</h1>
    </div>,
    <div className="mySlides" style={{ backgroundColor: "#ccc", width: "100%", height: "450px", borderBottomRightRadius: "8px", borderTopRightRadius: "8px" }}>
      <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%", margin: "0" }} className="d-flex">Third Slide</h1>
    </div>,
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [isHiddenBody, setIsHiddenBody] = useState(true);
  const [className, setClassName] = useState('span-header');

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleHiddenBody = () => {
    setIsHiddenBody(!isHiddenBody);
    handleChangeClassName()
  };

  const handleChangeClassName = () => {
    if (className === 'span-header') {
      setClassName('span-header-primary');
    } else {
      setClassName('span-header');
    }
  };

  //login
  const [isLogin, setIsLogin] = useState(false);
  const handleOpenLogin = () => {
    setIsLogin(true);
    setIsRegister(false);
  };
  const handleCloseLogin = () => {
    setIsLogin(false);
  };

  //register
  const [isRegister, setIsRegister] = useState(false);
  const handleOpenRegister = () => {
    setIsRegister(true);
    setIsLogin(false)
  };
  const handleCloseRegister = () => {
    setIsRegister(false);
  };

  const currentPath = window.location.pathname;

  return (
      <div className="app">
          <header className="header">
            <div style={{ maxWidth: '1400px' }} className="grid wide">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "120px" }}>
                {/*<h1 style={{ margin: '0' }}>LOGO</h1>*/}
                <img src="/img/logo-removebg-preview.png" style={{ width: "160px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "300px" }}>
                  <Router>
                      <span>
                        {currentPath !== "/" ? (
                            <Link onClick={handleHiddenBody} className={className === 'span-header-primary' ? 'span-header' : 'span-header-primary'} to="/">Home</Link>
                        ) : (
                            <span className="span-header-primary">Home</span>
                        )}
                      </span>
                        <span>
                        {currentPath !== "/myTickets" ? (
                            <Link onClick={handleHiddenBody} className={className === 'span-header-primary' ? 'span-header-primary' : 'span-header'} to="/myTickets">My Tickets</Link>
                        ) : (
                            <span className="span-header-primary">My Tickets</span>
                        )}
                    </span>
                        <span><Link className="span-header" to="/profile">Profiles</Link></span>
                  </Router>
                </div>
                <button onClick={handleOpenLogin} style={{ minWidth: '90px', border: "1px solid var(--primary-color)", color: "var(--primary-color)", borderRadius: "30px" }} className="btn">Login</button>
              </div>
            </div>
          </header>

        {isHiddenBody ? (<div>
          <div style={{ maxWidth: "100%" }} className="w3-content w3-display-container">
            {slides[slideIndex]}
            <button className="w3-button w3-black w3-display-left" onClick={() => plusDivs(-1)}>
              &#10094;
            </button>
            <button className="w3-button w3-black w3-display-right" onClick={() => plusDivs(1)}>
              &#10095;
            </button>
          </div>

          <div style={{ position: "relative", bottom: "35px" }}>
            <div className="grid wide">
              <div className="row sm-gutters">
                <div className="l-7">
                  <div style={{ width: "100%", backgroundColor: "#f5f2f2", borderRadius: "5px" }}>
                    <div style={{ padding: "28px 28px 20px 28px" }}>
                      <div>Event name</div>
                      <div className="d-flex">
                        <input className="w-100" style={{ padding: "8px", border: "1px solid", borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px", height: "34px" }} type="text" placeholder="Enter keyword..."/>
                        <button
                            style={{ minWidth: '110px', color: "#000", backgroundColor: "var(--primary-color)", borderBottomRightRadius: "5px", borderTopRightRadius: "5px" }}
                            className="btn">Search</button>
                      </div>

                      {isVisible && (<div className="mt-20">
                        <div className="d-flex">
                          <div className="w-50">
                            <div>Category</div>
                            <select className="input-event-name" name="" id="">
                              <option value="" selected>Choose...</option>
                              <option value="">1</option>
                            </select>
                          </div>

                          <div className="w-50">
                            <div>Date</div>
                            <input style={{ width: "66%", padding: "7px", borderRadius: "3px", border: "1px solid" }} type="text"/>
                          </div>
                        </div>

                        {/*2*/}
                        <div className="d-flex mt-20">
                          <div className="w-50">
                            <div>Price</div>
                            <select className="input-event-name" name="" id="">
                              <option value="" selected>Choose...</option>
                              <option value="">All</option>
                              <option value="">To 2M</option>
                              <option value="">From 2M to 5M</option>
                            </select>
                          </div>

                          <div className="w-50">
                            <div>Status</div>
                            <select className="input-event-name" name="" id="">
                              <option value="" selected>Choose...</option>
                              <option value="">All</option>
                              <option value="">Best Seller</option>
                              <option value="">Selling</option>
                              <option value="">Coming Soon</option>
                            </select>
                          </div>
                        </div>
                      </div>)}

                      <div style={{ textAlign: "center", marginTop: "10px" }}>
                        <i onClick={handleClick} className="fa-solid fa-arrow-down cs-p"/>
                      </div>
                    </div>
                  </div>

                  {/*card*/}
                  <div className="mt-30 row sm-gutters">
                    <div className="l-6 pd-r-l-5">
                      <div style={{ border: "1px solid" }}>
                        <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                        <div style={{ padding: "0 10px 10px 10px" }}>
                          <h3>Card title</h3>
                          <span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </span>
                          <div className="mt-5">Last updated 3 mind ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="l-6 pd-r-l-5">
                      <div style={{ border: "1px solid" }}>
                        <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                        <div style={{ padding: "0 10px 10px 10px" }}>
                          <h3>Card title</h3>
                          <span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </span>
                          <div className="mt-5">Last updated 3 mind ago</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*card-2*/}
                  <div className="mt-30 row sm-gutters">
                    <div className="l-6 pd-r-l-5">
                      <div style={{ border: "1px solid" }}>
                        <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                        <div style={{ padding: "0 10px 10px 10px" }}>
                          <h3>Card title</h3>
                          <span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </span>
                          <div className="mt-5">Last updated 3 mind ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="l-6 pd-r-l-5">
                      <div style={{ border: "1px solid" }}>
                        <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                        <div style={{ padding: "0 10px 10px 10px" }}>
                          <h3>Card title</h3>
                          <span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </span>
                          <div className="mt-5">Last updated 3 mind ago</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*card-3*/}
                  <div className="mt-30 row sm-gutters">
                    <div className="l-6 pd-r-l-5">
                      <div style={{ border: "1px solid" }}>
                        <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                        <div style={{ padding: "0 10px 10px 10px" }}>
                          <h3>Card title</h3>
                          <span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </span>
                          <div className="mt-5">Last updated 3 mind ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="l-6 pd-r-l-5">
                      <div style={{ border: "1px solid" }}>
                        <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                        <div style={{ padding: "0 10px 10px 10px" }}>
                          <h3>Card title</h3>
                          <span>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </span>
                          <div className="mt-5">Last updated 3 mind ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="l-1"/>
                <div className="l-4">
                  <div style={{ height: "auto", border: "1px solid" }}>
                    <div className="coming-soon">Coming Soon</div>
                    <div style={{ padding: "10px"}}>
                      {/*card1*/}
                      <div className="l-12 pd-r-l-5">
                        <div style={{ border: "1px solid" }}>
                          <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                          <div style={{ padding: "0 10px 10px 10px" }}>
                            <h4>Event name</h4>
                            <div className="mt-5">dd/MM/YYYY</div>
                          </div>
                        </div>
                      </div>

                      {/*card2*/}
                      <div className="l-12 pd-r-l-5 mt-20">
                        <div style={{ border: "1px solid" }}>
                          <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                          <div style={{ padding: "0 10px 10px 10px" }}>
                            <h4>Event name</h4>
                            <div className="mt-5">dd/MM/YYYY</div>
                          </div>
                        </div>
                      </div>

                      {/*card3*/}
                      <div className="l-12 pd-r-l-5 mt-20">
                        <div style={{ border: "1px solid" }}>
                          <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                          <div style={{ padding: "0 10px 10px 10px" }}>
                            <h4>Event name</h4>
                            <div className="mt-5">dd/MM/YYYY</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>) : (<Router>
          <Routes>
            <Route path="/myTickets" element={<MyTickets />} />
            <Route path="/detailTickets" element={<DetailTickets />} />
          </Routes>
        </Router>) }

        {/*pagination*/}
        {currentPath !== "/detailTickets" ? (
            <ul className="pagination pagination--mt">
              <li className="pagination-item">
                <a href="##" className="pagination-item__link">
                  <i className="pagination-item__icon fa-solid fa-angle-left"/>
                </a>
              </li>

              <li className="pagination-item pagination-item--active">
                <a href="##" className="pagination-item__link">1</a>
              </li>
              <li className="pagination-item">
                <a href="##" className="pagination-item__link">2</a>
              </li>
              <li className="pagination-item">
                <a href="##" className="pagination-item__link">...</a>
              </li>
              <li className="pagination-item">
                <a href="##" className="pagination-item__link">14</a>
              </li>

              <li className="pagination-item">
                <a href="##" className="pagination-item__link">
                  <i className="pagination-item__icon fa-solid fa-angle-right"/>
                </a>
              </li>
            </ul>
        ) : (<> </>)}

        {isLogin && (<div>
          <div className="modal-2">
            <div style={{ width: "900px", padding: "0" }} className="modal-content-2">
              <div className="d-flex align-item-center">
                <div style={{ padding: "20px" }} className="l-6">
                  <div>
                    <div>
                      <div>Email address</div>
                      <input style={{ borderRadius: "5px", border: "1px solid", padding: "2px 4px" }} className="w-100" type="text"/>
                      <div className="mt-5" style={{ fontSize: "10px", color: "#ccc" }}>More than 3 than than than than</div>
                    </div>
                    <div className="mt-10">
                      <div>Password</div>
                      <input style={{ borderRadius: "5px", border: "1px solid", padding: "2px 4px" }} className="w-100" type="text"/>
                    </div>
                    <div className="mt-10">
                      <input type="checkbox"/> check me out
                    </div>
                  </div>
                  <div className="mt-30 d-flex justify-content-between align-item-center">
                    <button className="btn btn--primary" onClick={handleCloseLogin}>Sign in</button>
                    <div className="d-flex" style={{ float: "right" }}>
                      <div style={{ fontSize: "12px" }}>U have no account ?</div>
                      <div onClick={handleOpenRegister} className="ml-10 cs-p" style={{ color: "var(--primary-color)", fontSize: "12px" }}>Sign up now!</div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "0" }} className="l-6">
                  {/*<div style={{ maxWidth: "100%" }} className="w3-content w3-display-container">*/}
                  {/*  {slidesLogin[slideIndexLogin]}*/}
                  {/*  <button className="w3-button w3-black w3-display-left" onClick={() => plusDivsLogin(-1)}>*/}
                  {/*    &#10094;*/}
                  {/*  </button>*/}
                  {/*  <button className="w3-button w3-black w3-display-right" onClick={() => plusDivsLogin(1)}>*/}
                  {/*    &#10095;*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                  <img src="/img/logo-removebg-preview.png" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>)}

        {isRegister && (<div>
          <div className="modal-2">
            <div style={{ width: "900px", padding: "0" }} className="modal-content-2">
              <div className="d-flex align-item-center">
                <div style={{ padding: "20px" }} className="l-6">
                  <div>
                    <div>
                      <div>Name</div>
                      <input style={{ borderRadius: "5px", border: "1px solid", padding: "2px 4px" }} className="w-100" type="text"/>
                    </div>
                    <div className="mt-10">
                      <div>Email address</div>
                      <input style={{ borderRadius: "5px", border: "1px solid", padding: "2px 4px" }} className="w-100" type="text"/>
                    </div>
                    <div className="mt-10">
                      <div>Password</div>
                      <input style={{ borderRadius: "5px", border: "1px solid", padding: "2px 4px" }} className="w-100" type="text"/>
                    </div>
                    <div className="mt-10">
                      <div>Confirm Password</div>
                      <input style={{ borderRadius: "5px", border: "1px solid", padding: "2px 4px" }} className="w-100" type="text"/>
                    </div>
                  </div>
                  <div className="mt-30 d-flex justify-content-between align-item-center">
                    <button className="btn btn--primary" onClick={handleCloseRegister}>Sign up</button>
                    <div className="d-flex" style={{ float: "right" }}>
                      <div style={{ fontSize: "12px" }}>U have an account ?</div>
                      <div onClick={handleOpenLogin} className="ml-10 cs-p" style={{ color: "var(--primary-color)", fontSize: "12px" }}>Sign in now!</div>
                    </div>
                  </div>
                </div>

                <div style={{ padding: "0" }} className="l-6">
                  {/*<div style={{ maxWidth: "100%" }} className="w3-content w3-display-container">*/}
                  {/*  {slidesLogin[slideIndexLogin]}*/}
                  {/*  <button className="w3-button w3-black w3-display-left" onClick={() => plusDivsLogin(-1)}>*/}
                  {/*    &#10094;*/}
                  {/*  </button>*/}
                  {/*  <button className="w3-button w3-black w3-display-right" onClick={() => plusDivsLogin(1)}>*/}
                  {/*    &#10095;*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                  <img src="/img/logo-removebg-preview.png" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>)}

        {/*footer*/}
        <div style={{ backgroundColor: "#ccc", width: "100%", height: "250px" }}>
          <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%" }} className="d-flex">Footer</h1>
        </div>
      </div>
  );
}

export default App;
