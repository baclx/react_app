import React from "react";

const ModalRegister = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-2">
            <div style={{ width: "900px", padding: "0" }} className="modal-content-2">
                <div className="d-flex align-item-center">
                    {children}
                    <div style={{ padding: "0" }} className="l-6">
                        <img src="/img/logo-removebg-preview.png" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalRegister;
