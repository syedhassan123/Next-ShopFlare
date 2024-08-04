"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "@/app/styles/header.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const state = useSelector((state) => state.cart);

  return (
    <>
      <div id="header" className={styles.header}>
        <div className={styles.navBar}>
          <div className={styles.logo}>
            <Link href="/">
              Shop<span>Flare</span>
            </Link>
          </div>

          <div className={styles.hamburger} onClick={toggleMenu}>
            {isMenuOpen ? (
              <FiX size={30} color="#fff" /> // Close icon when menu is open
            ) : (
              <FiMenu size={30} color="#fff" /> // Hamburger icon when menu is closed
            )}
          </div>

          <div
            className={`${styles.menuBar} ${isMenuOpen ? styles.active : ""}`}
          >
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/product">Products</Link>
              </li>
              <li
                className={`${styles.menuItem} ${styles.dropdown}`}
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
                onClick={toggleDropdown} // Support touch devices
              >
                <span className={styles.dropSpan}>Categories</span>
                {isDropdownOpen && (
                  <ul className={styles.dropdownMenu}>
                    <li className={styles.dropdownItem}>
                      <Link href="/categories/electronics">Electronics</Link>
                    </li>
                    <li className={styles.dropdownItem}>
                      <Link href="/categories/jewelery">Jewellery</Link>
                    </li>
                    <li className={styles.dropdownItem}>
                      <Link href="/categories/men's clothing">
                        Men'sClothing
                      </Link>
                    </li>
                    <li className={styles.dropdownItem}>
                      <Link href="/categories/women's clothing">
                        Women'sClothing
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          <li className={styles.menuItem} style={{ marginTop: "10px" }}>
            <Link href="/cart" style={{ fontSize: "1.8rem" }}>
              <ShoppingCartOutlinedIcon style={{ fontSize: "2.4rem" }} />
              {state.cart.length}
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
