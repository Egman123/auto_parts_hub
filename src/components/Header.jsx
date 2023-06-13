import { useEffect, useState } from "react";
import "../styles/header.css";
import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { NavLink as Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isToggleLang, setStateFalse, setStateTrue } from "../store/userSlice";
import { setToggle } from "../store/userSlice";
import { api } from "../config/api";

const Header = () => {
  const [lang, setLang] = useState({});
  const [flag, setFlag] = useState(false);
  const toggle = useSelector((state) => state.userSlice.toggle);
  const cartNumber = useSelector((state) => state.userSlice.cartNumber);
  const cartAccessories = useSelector(
    (state) => state.userSlice.cartAccessories
  );

  const [darkOutlined, setDarkOutlined] = useState("header_navbar");
  const toggleLang = useSelector((state) => state.userSlice.toggleLang);
  const dispacth = useDispatch();

  const getLanguagesData = async () => {
    await fetch(api + "languages")
      .then((response) => response.json())
      .then((result) => setLang(result[0]));
  };

  useEffect(() => {
    getLanguagesData();
  }, []);
  console.log(lang.navbar, "lang.navbar");
  const navigate = useNavigate();

  
  const CartOnClickHandler = () => {
    navigate("/cart");
    // dispacth(setStateFalse());
  };

  const goHomeClickHandler = () => {
    navigate("/");
    dispacth(setStateTrue());
  };

  const toggleLanguageHandler = () => {
    dispacth(isToggleLang());
    //  console.log(toggleLang, lang.header.inputPlaceholder);
  };

  // console.log(isDark);
  return (
    <div className={toggle ? "darkHeader" : "header"}>
      <div className="logo-button">

        {/* logo button */}
        <img
          onClick={goHomeClickHandler}
          className="logo_img"
          src="assets/logo1.png"
          alt="logo"
        />
      </div>
      <div className="search-input">

        {/* menu button */}
        <MenuOutlined className="menuOutlined" />

        {/* header navbar */}
        {/* <ul >
          <li>
            <a onClick={toggleLanguageHandler} href="#home">
            Home
            </a>
          </li>
          <li>
            <a href="#news">
              {lang.navbar ? (toggleLang ? "News" : lang.navbar.news) : "News"}
            </a>
          </li>
          <li>
            <a href="#contact">
              {lang.navbar
                ? toggleLang
                  ? "Contact"
                  : lang.navbar.contact
                : "Contact"}{" "}
            </a>
          </li>
          <li>
            <a href="#about">
              {lang.navbar
                ? toggleLang
                  ? "About"
                  : lang.navbar.about
                : "About"}
            </a>
          </li>{" "}
          <CloseOutlined
            className="CloseOutlined"
          />
        </ul> */}

        {/* search input */}
        <input
          type="text"
          className="header_search"
          placeholder={
            lang.navbar
              ? toggleLang
                ? "Search Parts And Products"
                : lang.header.inputPlaceholder
              : "Home"
          }
        />
      </div>
      <div className="cart-icon">

        {/* cart icon */}
        <ShoppingCartOutlined
          onClick={CartOnClickHandler}
          className="ShoppingCartOutlined"
        />
        {cartAccessories.length}

        <div>
          {lang.navbar ? (toggleLang ? "Cart" : lang.header.cart) : "Cart"}
        </div>
      </div>
      <div className="register-button">

        {/* registration button */}
        <UserOutlined className="UserOutlined" />
        <div>
          {lang.navbar
            ? toggleLang
              ? "Sign In"
              : lang.header.registration
            : "Sign In"}
        </div>
      </div>
      <div className="language-toggle">

        {/* language toggle */}
        <center>
          <div className="switch">
            <input
              onClick={toggleLanguageHandler}
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
            />
            <label for="language-toggle"></label>
            <span className="on">RU</span>
            <span className="off">EN</span>
          </div>
        </center>
      </div>
      <div className="mode-toggle">

        {/* mode toggle */}
        <form>
          <input
            id="dark-mode"
            className="toggle"
            type="checkbox"
            name="Dark mode"
            role="switch"
            value="on"
            onClick={() => dispacth(setToggle())}
          />

          <div className="curtain"></div>
          {toggle ? "Light Mode" : "Dark Mode"}
        </form>
      </div>

    </div>
  );
};

export default Header;
