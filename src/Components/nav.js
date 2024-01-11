import React from "react";

import { MdLocalShipping } from "react-icons/md";
import Logo from "../image/logo.webp";
import "./nav.css";
import { IoIosSearch } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="header">
      <div className="top_header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping When Shopping upto $1000</p>
        </div>
      </div>
      <div className="mid_header">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="search_box">
          <input type="text" value="" placeholder="search" />
          <button>
            <IoIosSearch />
          </button>
        </div>
        {isAuthenticated ? (
          /**Logout button */
          <div className="user">
            <div className="icon">
              <CiLogout />
            </div>
            <div className="btn">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          /**Login button */
          <div className="user">
            <div className="icon">
              <MdLogin />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        )}
        <div className="last_header">
          <div className="user_profil">
            {isAuthenticated && (
              <>
                <div className="icon">
                  <FaRegUser />
                </div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
