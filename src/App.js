import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MyTickets from './components/MyTickets';

import './style/main.css'
import './style/base.css'
import './style/grid.css'

function App() {
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

  return (
      <div className="app">
          <header className="header">
            <div style={{ maxWidth: '1400px' }} className="grid wide">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "120px" }}>
                {/*<h1 style={{ margin: '0' }}>LOGO</h1>*/}
                <img src="/img/logo-removebg-preview.png" style={{ width: "160px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "300px" }}>
                  <Router>
                    <span><Link onClick={handleHiddenBody} className={className === 'span-header-primary' ? 'span-header' : 'span-header-primary'} to="/">Home</Link></span>
                    <span><Link onClick={handleHiddenBody} className={className === 'span-header-primary' ? 'span-header-primary' : 'span-header'} to="/myTickets">My Tickets</Link></span>
                    <span><Link className="span-header" to="/profile">Profiles</Link></span>
                  </Router>
                </div>
                <button style={{ minWidth: '90px', border: "1px solid #EE4D2D", color: "#EE4D2D", borderRadius: "30px" }} className="btn">Login</button>
              </div>
            </div>
          </header>

        {isHiddenBody ? (<div>
          <div style={{ backgroundColor: "#ccc", width: "100%", height: "450px" }}>
            <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%" }} className="d-flex">First Slide</h1>
          </div>

          <div style={{ position: "relative", bottom: "35px" }}>
            <div className="grid wide">
              <div className="row sm-gutters">
                <div className="l-7">
                  <div style={{ width: "100%", backgroundColor: "#f5f2f2", borderRadius: "5px" }}>
                    <div style={{ padding: "28px 28px 20px 28px" }}>
                      <div>Event name</div>
                      <div className="d-flex">
                        <input className="w-100" style={{ padding: "8px", border: "1px solid", borderBottomLeftRadius: "5px", borderTopLeftRadius: "5px" }} type="text" placeholder="Enter keyword..."/>
                        <button
                            style={{ minWidth: '110px', color: "#000", backgroundColor: "#EE4D2D", borderBottomRightRadius: "5px", borderTopRightRadius: "5px" }}
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
                              <option value="">1</option>
                            </select>
                          </div>

                          <div className="w-50">
                            <div>Status</div>
                            <select className="input-event-name" name="" id="">
                              <option value="" selected>Choose...</option>
                              <option value="">1</option>
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
          </Routes>
        </Router>) }

        {/*pagination*/}
        <ul className="pagination pagination--mt">
          <li className="pagination-item">
            <a href="" className="pagination-item__link">
              <i className="pagination-item__icon fa-solid fa-angle-left"/>
            </a>
          </li>

          <li className="pagination-item pagination-item--active">
            <a href="" className="pagination-item__link">1</a>
          </li>
          <li className="pagination-item">
            <a href="" className="pagination-item__link">2</a>
          </li>
          <li className="pagination-item">
            <a href="" className="pagination-item__link">...</a>
          </li>
          <li className="pagination-item">
            <a href="" className="pagination-item__link">14</a>
          </li>

          <li className="pagination-item">
            <a href="" className="pagination-item__link">
              <i className="pagination-item__icon fa-solid fa-angle-right"/>
            </a>
          </li>
        </ul>

        {/*footer*/}
        <div style={{ backgroundColor: "#ccc", width: "100%", height: "250px" }}>
          <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%" }} className="d-flex">Footer</h1>
        </div>
      </div>
  );
}

export default App;
