import React, { useState } from "react";
import { styled } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CgMenu , CgClose} from "react-icons/cg";

const Nav = () => {

  const [menuIcon, setMenuIcon] = useState();

  const Nav = styled.nav`
    .navbar{
      margin: 20px;
    }
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .navbar-link a{
      font-size: 1.6rem;
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 2.6rem;
      }

      .cart-total--item {
        width: 2.8rem;
        height: 2.8rem;
        position: absolute;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 2.6rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 2.6rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        // height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
        padding-left: 0px;
        margin-top: 0px;
        gap: 2.8rem;
      }

      .navbar-lists .home-link{
        margin-top: 65px;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 2.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 3.2rem;
        }

        .cart-total--item {
          width: 3rem;
          height: 3rem;
          font-size: 1.6rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li id="1" className="navbar-link home-link" onClick={() => setMenuIcon(false)}>
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li id="2" className="navbar-link" onClick={() => setMenuIcon(false)}>
            <NavLink to="/products">
              Products
            </NavLink>
          </li>
          <li id="3" className="navbar-link" onClick={() => setMenuIcon(false)}>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </li>
          <li  id="4" className="navbar-link" onClick={() => setMenuIcon(false)}>
            <NavLink to="/about">
              About
            </NavLink>
          </li>
          <li id="5" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
            <NavLink to="/cart">
              <FaShoppingCart className="cart-trolley" />
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
        </ul>
        <div className="mobile-navbar-btn">
          <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={() => setMenuIcon(true)}/>
          <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setMenuIcon(false)}/>
        </div>
      </div>
    </Nav>
  );
};

export default Nav;
