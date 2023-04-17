import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import "./Header.css"
import { useNavigate } from "react-router-dom";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.setItem("isLoggedIn", false);
        navigate("/login")
    }

    return (
        <div>
            <Navbar className="navbar" color="light" light expand="md">
                <NavbarBrand href="/" style={{ fontSize: "30px" }}>reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" style={{ marginLeft: "auto" }} navbar>
                        <NavItem className="link">
                            <NavLink style={{ color: "white", backgroundColor: "#0D6EFD", borderRadius: "5px" }} href="#">Home</NavLink>
                        </NavItem>
                        <NavItem className="link">
                            <NavLink href="#">
                                Features
                            </NavLink>
                        </NavItem>
                        <NavItem className="link">
                            <NavLink href="#">
                                Pricing
                            </NavLink>
                        </NavItem>
                        <NavItem className="link">
                            <NavLink href="#">
                                FAQs
                            </NavLink>
                        </NavItem>
                        <NavItem className="link">
                            <NavLink href="#">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem className="link">
                            <NavLink onClick={handleLogout} style={{ color: "white", backgroundColor: "#0D6EFD", borderRadius: "5px" }} href="#">
                                Logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}