import {Link} from "react-router-dom";
import {useState} from "react";

function Header() {
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

    const [className] = useState('span-header');

    const currentPath = window.location.pathname;

    return (
        <div>
            <header className="header">
                <div style={{ maxWidth: '1400px' }} className="grid wide">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "120px" }}>
                        {/*<h1 style={{ margin: '0' }}>LOGO</h1>*/}
                        <img src="../../img/logo-removebg-preview.png" style={{ width: "160px" }} />
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "300px" }}>
                      <span>
                        {(currentPath === "/" || currentPath === "") ? (
                            <span className="span-header-primary">Home</span>
                        ) : (
                            <Link className={className === 'span-header-primary' ? 'span-header-primary' : 'span-header'} to="/">Home</Link>
                        )}
                      </span>
                                <span>
                        {currentPath === "/myTickets" ? (
                                <span className="span-header-primary">My Tickets</span>
                        ) : (
                            <Link className={className === 'span-header-primary' ? 'span-header-primary' : 'span-header'} to="/myTickets">My Tickets</Link>
                        )}
                    </span>
                                <span><Link className="span-header" to="/profile">Profiles</Link></span>
                        </div>
                        <button onClick={handleOpenLogin} style={{ minWidth: '90px', border: "1px solid var(--primary-color)", color: "var(--primary-color)", borderRadius: "30px" }} className="btn">Login</button>
                    </div>
                </div>
            </header>

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
                                <img src="/img/logo-removebg-preview.png" style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    );
}

export default Header;
