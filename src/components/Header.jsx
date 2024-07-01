import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
import "../index.css";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
  const cartData = useSelector((state) => state.cart);
  console.log(cartData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="sticky-navbar">
        <Container>
          <Navbar.Brand href="#home" style={{ fontSize: "30px" }}>
            <i className="fa-brands fa-shopify"></i>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">
              <NavLink to="/" className="text-decoration-none text-muted">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/cart" className="text-decoration-none text-muted">
                Add to Cart
              </NavLink>
            </Nav.Link>
          </Nav>
          <Badge
            badgeContent={cartData.ordercart?.length}
            color="success"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "27px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            {!cartData.ordercart.length ? (
              <>
                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                <img
                  src="\src\assets\cart.gif"
                  alt=""
                  className="emptycart_img"
                  style={{ width: "5rem", padding: 10 }}
                />
              </>
            ) : (
              <div>
                <ul style={{ color: "black" }}>
                  {cartData.ordercart.map((element, index) => (
                    <li key={index}>{element.rname}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Menu>
      </Navbar>
    </>
  );
}

export default Header;
