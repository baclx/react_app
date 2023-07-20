import {DefaultLayout} from "../../components/layout";
import {IconButton, Input, Tab, Tabs, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React, {useState} from "react";

function DetailTickets() {
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
        <div className="mySlides" style={{ backgroundColor: "#ccc", width: "100%", height: "450px" }}>
            <h1 style={{ justifyContent: "center", alignItems: "center", height: "100%" }} className="d-flex">Three Slide</h1>
        </div>
        // Add more slides here
    ];

    //
    const [valueTab, setValueTab] = useState(0);
    const handleChange = (event, newValue) => {
        setValueTab(newValue);
    };

    //
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () => {
        setIsOpenModal(true);
    };
    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    //
    const [quantity, setQuantity] = useState(0);
    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <DefaultLayout>
            <div>
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
                                        <Tabs value={valueTab} onChange={handleChange} indicatorColor="var(--primary-color)">
                                            <Tab sx={{
                                                '&.Mui-selected': {
                                                    color: 'var(--primary-color)',
                                                },
                                            }} label="Information" />
                                            <Tab sx={{
                                                '&.Mui-selected': {
                                                    color: 'var(--primary-color)',
                                                },
                                            }} label="Schedule" />
                                        </Tabs>

                                        {valueTab === 0 && <Typography style={{ padding: "15px 0" }}>
                                            <div>
                                                <h3>Media Heading</h3>
                                                <div>
                                                    This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                                <div className="mt-20">
                                                    This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                                <div className="mt-20">
                                                    This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                                <div className="mt-20">
                                                    This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                                <div className="mt-20">
                                                    This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                            </div>
                                        </Typography>}
                                        {valueTab === 1 && <Typography style={{ padding: "15px 0" }}>
                                            <div className="d-flex align-item-center">
                                                <div>
                                                    <div style={{ width: "70px", height: "70px", borderRadius: "9000px", backgroundColor: "var(--backgr-color)" }}>

                                                    </div>
                                                </div>
                                                <div className="ml-10">
                                                    <h4>List-based media object</h4>
                                                    <div>
                                                        This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...,
                                                        This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                    </div>
                                                    <div className="mt-20">18:20 07 June 2023</div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-item-center mt-20">
                                                <div>
                                                    <div style={{ width: "70px", height: "70px", borderRadius: "9000px", backgroundColor: "var(--backgr-color)" }}>

                                                    </div>
                                                </div>
                                                <div className="ml-10">
                                                    <h4>List-based media object</h4>
                                                    <div>
                                                        This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...,
                                                        This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                    </div>
                                                    <div className="mt-20">18:20 07 June 2023</div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-item-center mt-20">
                                                <div>
                                                    <div style={{ width: "70px", height: "70px", borderRadius: "9000px", backgroundColor: "var(--backgr-color)" }}>

                                                    </div>
                                                </div>
                                                <div className="ml-10">
                                                    <h4>List-based media object</h4>
                                                    <div>
                                                        This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...,
                                                        This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                                    </div>
                                                    <div className="mt-20">18:20 07 June 2023</div>
                                                </div>
                                            </div>
                                        </Typography>}
                                    </div>
                                </div>
                            </div>
                            <div className="l-1"/>
                            <div className="l-4">
                                <div>
                                    <div className="l-12 pd-r-l-5">
                                        <div style={{ border: "1px solid" }}>
                                            <div style={{ backgroundColor: "#ccc", width: "100%", height: "120px" }}>Image cap</div>
                                            <div style={{ padding: "0 10px 10px 10px" }}>
                                                <h4>Event name</h4>
                                                <div className="mt-5">hh:ii MM/DD - hh:ii MM/DD</div>
                                                <div className="mt-5">Price: 523$</div>
                                                <div className="mt-5">This is a wider card with supporting text below as a natural lead-in to additional content...</div>
                                                <button onClick={handleOpenModal} className="btn btn--primary mt-10">Take a ticket</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*-*/}
                <div style={{ marginBottom: "70px" }}>
                    <div className="grid wide">
                        <div className="row sm-gutters">
                            <div style={{ padding: "20px", backgroundColor: "var(--backgr-color)", width: "100%" }} className="l-12">
                                <h1>Heading</h1>
                                <div className="l-8">
                                    This is a wider card with supporting text below as a natural lead-in to additional content..., This is a wider card with supporting text below as a natural lead-in to additional content...
                                </div>
                                <div className="mt-20 d-flex justify-content-between">
                                    <div className="d-flex">
                                        <div style={{ backgroundColor: "#333", width: "160px", height: "180px" }}>
                                        </div>
                                        <div style={{ backgroundColor: "#fff", width: "210px", height: "180px" }}>
                                            <div className="ml-10">
                                                <h3>Card Title</h3>
                                                <div>
                                                    This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                                <div className="mt-10">
                                                    Last updated 3 mind ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*2*/}
                                    <div className="d-flex">
                                        <div style={{ backgroundColor: "#333", width: "160px", height: "180px" }}>
                                        </div>
                                        <div style={{ backgroundColor: "#fff", width: "210px", height: "180px" }}>
                                            <div className="ml-10">
                                                <h3>Card Title</h3>
                                                <div>
                                                    This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                                <div className="mt-10">
                                                    Last updated 3 mind ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*3*/}
                                    <div className="d-flex">
                                        <div style={{ backgroundColor: "#333", width: "160px", height: "180px" }}>
                                        </div>
                                        <div style={{ backgroundColor: "#fff", width: "210px", height: "180px" }}>
                                            <div className="ml-10">
                                                <h3>Card Title</h3>
                                                <div>
                                                    This is a wider card with supporting text below as a natural lead-in to additional content...
                                                </div>
                                                <div className="mt-10">
                                                    Last updated 3 mind ago
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*modal*/}
                {isOpenModal && (
                    <div className="modal-2">
                        <div style={{ width: "700px" }} className="modal-content-2">
                            <div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4>Event name</h4>
                                        <div>Ticket name</div>
                                    </div>
                                    <div>
                                        <span className="cs-p" onClick={handleCloseModal}>&times;</span>
                                    </div>
                                </div>
                                <div className="mt-30 d-flex justify-content-between">
                                    <div style={{ width: "45%" }}>
                                        <div className="d-flex justify-content-between align-item-center">
                                            <div>Full Name</div>
                                            <div>Full Name</div>
                                        </div>
                                        <div className="d-flex justify-content-between align-item-center mt-10">
                                            <div>Email</div>
                                            <div>Email@gmail.com</div>
                                        </div>
                                        <div className="d-flex justify-content-between align-item-center mt-10">
                                            <div>Phone</div>
                                            <div>0123456789</div>
                                        </div>
                                    </div>
                                    <div style={{ width: "45%" }}>
                                        <div className="d-flex justify-content-between align-item-center">
                                            <div>Price</div>
                                            <div>$100</div>
                                        </div>
                                        <div className="d-flex justify-content-between align-item-center mt-10">
                                            <div>Amount</div>
                                            <div>
                                                <IconButton style={{ padding: '2px' }} aria-label="decrease" onClick={handleDecrease}>
                                                    <RemoveIcon />
                                                </IconButton>
                                                <Input
                                                    type="text"
                                                    value={quantity}
                                                    readOnly
                                                    disableUnderline
                                                    inputProps={{ style: { textAlign: 'center' } }}
                                                    style={{
                                                        textAlign: 'center',
                                                        padding: '2px',
                                                        width: '32px',
                                                    }}
                                                />
                                                <IconButton style={{ padding: '2px' }} aria-label="increase" onClick={handleIncrease}>
                                                    <AddIcon />
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-item-center mt-10">
                                            <div>Total</div>
                                            <div style={{ fontWeight: "bolder" }}>$2200</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-30">
                                    <h5>Payment</h5>
                                    <div style={{ width: "100%", height: "200px", border: "1px dashed var(--primary-color)", borderRadius: "30px" }}>
                                        <div className="d-flex justify-content-center align-item-center" style={{ height: "100%" }} >Upload payment</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-30" style={{ float: "right" }}>
                                <button className="btn btn--primary" onClick={handleCloseModal}>Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </DefaultLayout>
    )
}

export default DetailTickets;
