import React, { useState } from "react";
import "./Header.scss";
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
  useLocation,
  // useNavigate,
} from "react-router-dom";
import Main from "../pages/Main";
import Footer from "./Footer";


const Header = ({ setIsLoggedIn }) => {
  const [mMenuOnOff, setMmenuOnOff] = useState(false);

  // const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 버튼 클릭 시 로컬 스토리지에서 토큰이랑로그인 삭제
    localStorage.removeItem("token"); // 토큰 삭제
    localStorage.removeItem("isLoggedIn"); 
    setIsLoggedIn(false); // 로그인 상태를 false로 설정
    window.location.href = "/";
  };

  const handleMmenuOnOff = () => {
    setMmenuOnOff((prevMmenuOnOff) => {
      const newMmenuOnOff = !prevMmenuOnOff;
      if (newMmenuOnOff) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return newMmenuOnOff;
    });
  };
  const handleMmenuBackground = (e) => {
    if (e.target === e.currentTarget) {
      console.log(e.target);
      console.log(e.currentTarget);
      setMmenuOnOff((prevMmenuOnOff) => {
        const newMmenuOnOff = !prevMmenuOnOff;
        if (newMmenuOnOff) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
        return newMmenuOnOff;
      });
    }
  };
  // localStorage.setItem("clickMenu", "");
  // console.log("hello", localStorage.getItem("clickMenu") === null);
  const location = useLocation();
  console.log("location", location.pathname.slice(1));
  const [clickMenu, setClickMenu] = useState(location.pathname.slice(1));

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <h1
            onClick={() => {
              setClickMenu("");
            }}
          >
            <Link to="/">
            비코즈 로고
            </Link>
          </h1>
          <div className="header-menu">
            <ul className="header-menu__ul">
              <li
                className={`header-menu__li  ${
                  clickMenu === "" ? "header-menu__li-clicked" : ""
                }`}
                onClick={() => {
                  setClickMenu("");
                }}
              >
                <Link to="/">MAIN</Link>
              </li>
              <li
                className={`header-menu__li ${
                  clickMenu === "control" ? "header-menu__li-clicked" : ""
                }`}
                onClick={() => {
                  setClickMenu("control");
                }}
              >
                <Link to="/control">GAME</Link>
              </li>
              <li
                className={`header-menu__li ${
                  clickMenu === "warning" ? "header-menu__li-clicked" : ""
                } `}
                onClick={() => {
                  setClickMenu("warning");
                }}
              >
                <Link to="/warning">SHOP</Link>
              </li>
              <li
                className={`header-menu__li ${
                  clickMenu === "statistical" ? "header-menu__li-clicked" : ""
                }`}
                onClick={() => {
                  setClickMenu("statistical");
                }}
              >
                <Link to="/statistical">EXPLORER</Link>
              </li>
              <li
                className={`header-menu__li ${
                  clickMenu === "actionlist" ? "header-menu__li-clicked" : ""
                }`}
                onClick={() => {
                  setClickMenu("actionlist");
                }}
              >
                <Link to="/actionlist">EARN</Link>
              </li>
            </ul>
          </div>
          <div className="header--plofile">내 프로필 사진</div>
          {/* 반응형시 나오는 버튼 */}
          <div
            className={mMenuOnOff ? "m-main-menu active" : "m-main-menu"}
            onClick={handleMmenuOnOff}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* 버튼클릭시 호출되는 메뉴들 */}

          {mMenuOnOff ? (
            <div className="header__mobile-menu">
              <ul className="mobile-menu__list">
                <li
                  className={`mobile-menu__li  ${
                    clickMenu === "" ? "mobile-menu__li-clicked" : ""
                  }`}
                  onClick={() => {
                    setClickMenu("");
                    handleMmenuOnOff(); // 메뉴 항목 클릭 시 메뉴 닫기
                  }}
                >
                  <Link to="/">MAIN</Link>
                </li>
                <li
                  className={`mobile-menu__li ${
                    clickMenu === "control" ? "mobile-menu__li-clicked" : ""
                  }`}
                  onClick={() => {
                    setClickMenu("control");
                    handleMmenuOnOff(); // 메뉴 항목 클릭 시 메뉴 닫기
                  }}
                >
                  <Link to="/control">GAME</Link>
                </li>
                <li
                  className={`mobile-menu__li ${
                    clickMenu === "warning" ? "mobile-menu__li-clicked" : ""
                  } `}
                  onClick={() => {
                    setClickMenu("warning");
                    handleMmenuOnOff(); // 메뉴 항목 클릭 시 메뉴 닫기
                  }}
                >
                  <Link to="/warning">SHOP</Link>
                </li>
                <li
                  className={`mobile-menu__li ${
                    clickMenu === "statistical" ? "mobile-menu__li-clicked" : ""
                  }`}
                  onClick={() => {
                    setClickMenu("statistical");
                    handleMmenuOnOff(); // 메뉴 항목 클릭 시 메뉴 닫기
                  }}
                >
                  <Link to="/statistical">EXPLORER</Link>
                </li>
                <li
                  className={`mobile-menu__li ${
                    clickMenu === "actionlist" ? "mobile-menu__li-clicked" : ""
                  }`}
                  onClick={() => {
                    setClickMenu("actionlist");
                    handleMmenuOnOff(); // 메뉴 항목 클릭 시 메뉴 닫기
                  }}
                >
                  <Link to="/actionlist">EARN</Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div
        className={
          mMenuOnOff
            ? "m-main-menu__background active-menu"
            : "m-main-menu__background"
        }
        onClick={handleMmenuBackground}
      ></div>
      </div>

      <Routes>
        <Route path="/" element={<Main setClickMenu={setClickMenu} />} />
        {/* <Route path="/control" element={<Control />} /> */}
      </Routes>
      <Footer/>
    </>
  );
};

export default Header;
