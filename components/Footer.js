import React, { useState } from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footer/footer--logo.png";

//sns아이콘들
import footerDiscodeLogo from "../assets/images/footer/sns/footer--sns--discode.png";
import footerTelegramLogo from "../assets/images/footer/sns/footer--sns--telegram.png";
import footerXLogo from "../assets/images/footer/sns/footer--sns--x.png";
import footerYoutubeLogo from "../assets/images/footer/sns/footer--sns--youtube.png";


const Footer = () => {


  return (
    <div className="footer">
      <p className="footer--logo"><img src={footerLogo} alt="footerLogo"/></p>
      <ul className="sns--list">
        <li><img src={footerXLogo} alt="xlogo"/></li>
        <li><img src={footerDiscodeLogo} alt="discodeLogo"/></li>
        <li><img src={footerYoutubeLogo} alt="youtubeLogo"/></li>
        <li><img src={footerTelegramLogo} alt="telegramLogo"/></li>
      </ul>
      <ul className="policy--txt">
        <li>
          <Link
            to="/"
          >Terms of Service
          </Link>
        </li>
        <li>
          <Link
            to="/"
          >Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            to="/"
          >Refund Policy
          </Link>
        </li>
      </ul>
      <dl className="address--txt">
        <dt>Suite 305, Griffith Corporate Centre, Beachmont, Kingstown St. Vincent and the Grenadines</dt>
        <dd>BKOZ CO,. LLC</dd>
      </dl>
      <div className="menu--list">
        <dl>
          <dt>GAME</dt>
          <dd>
            <Link>Game</Link>
          </dd>
        </dl>
        <dl>
          <dt>SHOP</dt>
          <dd><Link>Pass</Link></dd>
          <dd><Link>Item</Link></dd>
        </dl>
        <dl>
          <dt>EXPLORER</dt>
          <dd><Link>Explorer</Link></dd>
        </dl>
        <dl>
          <dt>EARN</dt>
          <dd><Link>Earn</Link></dd>
        </dl>
      </div>
    </div>
  );
};

export default Footer;
