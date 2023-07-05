import '../App.css';

import React, { useState } from 'react';

import '../style/main.css'
import '../style/base.css'
import '../style/grid.css'

function MyTickets() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        console.log(1)
        setIsOpen(true);
        console.log(isOpen)
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="mt-30">
            <div className="grid wide">
                <div className="row sm-gutters">
                    <div className="col l-2">
                        <nav style={{ border: "1px solid" }} className="category">
                            <ul className="category-list">
                                <li className="category-item category-item--active">
                                    <a className="category-item__link">My tickets</a>
                                </li>
                                <li className="category-item">
                                    <a className="category-item__link">Paid Tickets</a>
                                </li>
                                <li className="category-item">
                                    <a className="category-item__link">Refund requesting</a>
                                </li>
                                <li className="category-item">
                                    <a className="category-item__link">History</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col l-10">
                        <div style={{ marginLeft: "20px" }} className="d-flex">
                            <div style={{ backgroundColor: "#ccc", width: "100%", height: "140px" }} className="l-3">
                                <span className="d-flex align-item-center justify-content-center" style={{ height: "100%" }}>Image Cap</span>
                            </div>
                            <div className="l-9" style={{ border: "1px solid" }}>
                                <div style={{ padding: "0 10px" }}>
                                    <div className="d-flex justify-content-between align-item-center">
                                        <h2>Card title</h2>
                                        <span>Last updated in 3 hours ago</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-item-center">
                                        <div>
                                            <div>hh:ii MM/DD - hh:ii MM/DD</div>
                                            <div>This is a wider card with supporting text below as a natural lead-in to additional content...</div>
                                        </div>
                                        <button className="btn btn--primary bdr-50">Detail</button>
                                    </div>
                                    <div className="d-flex justify-content-between align-item-center mt-20">
                                        <span>Accept in HH:ii dd/MM/YYYY</span>
                                        <button  onClick={handleOpenModal} className="btn btn--primary bdr-50">Refund request</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*2*/}
                        <div style={{ marginLeft: "20px" }} className="d-flex mt-30">
                            <div style={{ backgroundColor: "#ccc", width: "100%", height: "140px" }} className="l-3">
                                <span className="d-flex align-item-center justify-content-center" style={{ height: "100%" }}>Image Cap</span>
                            </div>
                            <div className="l-9" style={{ border: "1px solid" }}>
                                <div style={{ padding: "0 10px" }}>
                                    <div className="d-flex justify-content-between align-item-center">
                                        <h2>Card title</h2>
                                        <span>Last updated in 3 hours ago</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-item-center">
                                        <div>
                                            <div>hh:ii MM/DD - hh:ii MM/DD</div>
                                            <div>This is a wider card with supporting text below as a natural lead-in to additional content...</div>
                                        </div>
                                        <button className="btn btn--primary bdr-50">Detail</button>
                                    </div>
                                    <div className="d-flex justify-content-between align-item-center mt-20">
                                        <span>Accept in HH:ii dd/MM/YYYY</span>
                                        <button className="btn btn--primary bdr-50">Refund request</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div style={{ marginLeft: "20px" }} className="d-flex mt-30">
                            <div style={{ backgroundColor: "#ccc", width: "100%", height: "140px" }} className="l-3">
                                <span className="d-flex align-item-center justify-content-center" style={{ height: "100%" }}>Image Cap</span>
                            </div>
                            <div className="l-9" style={{ border: "1px solid" }}>
                                <div style={{ padding: "0 10px" }}>
                                    <div className="d-flex justify-content-between align-item-center">
                                        <h2>Card title</h2>
                                        <span>Last updated in 3 hours ago</span>
                                    </div>
                                    <div className="d-flex justify-content-between align-item-center">
                                        <div>
                                            <div>hh:ii MM/DD - hh:ii MM/DD</div>
                                            <div>This is a wider card with supporting text below as a natural lead-in to additional content...</div>
                                        </div>
                                        <button className="btn btn--primary bdr-50">Detail</button>
                                    </div>
                                    <div className="d-flex justify-content-between align-item-center mt-20">
                                        <span>Accept in HH:ii dd/MM/YYYY</span>
                                        <button className="btn btn--primary bdr-50">Refund request</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
            {isOpen && (
                <div className="modal-2">
                    <div className="modal-content-2">
                        <div>
                            <div className="d-flex justify-content-between">
                                <div>Send request refund</div>
                                <span className="cs-p" onClick={handleCloseModal}>&times;</span>
                            </div>
                            <div className="mt-30">
                                <div>Reason (*)</div>
                                <select style={{ padding: "6px" }} className="w-100" name="" id="">
                                    <option selected value="">Choose...</option>
                                    <option value="">1</option>
                                </select>
                            </div>
                            <div className="mt-30">
                                <div>Description</div>
                                <textarea name="" id="" cols="60" rows="10"/>
                            </div>
                        </div>
                        <div className="mt-30" style={{ float: "right" }}>
                            <button style={{ marginRight: "20px" }} className="btn-close" onClick={handleCloseModal}>Close</button>
                            <button className="btn-send">Send</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MyTickets;
