import ParticlesComponent from "../components/Particles";
import "../styles/Main.scss";
import React, { useEffect, useRef, useState } from "react";


// import { Link } from "react-router-dom";

//스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

//실시간 슬라이드
import Marquee from "react-fast-marquee";


//이미지들
import mainBannerImg1 from "../assets/images/main/main-banner.png";
import mainBannerImg2 from "../assets/images/main/main-banner2.png";
import demoImg from "../assets/images/demoImg.png";
import mainCardGenreRightImg from "../assets/images/main/mainCardGenreRightImg.png";
import baseCoinIcon from "../assets/images/baseCoinIcon.png";
import mainNetworkMaticIcon from "../assets/images/main/mainNetworkMaticIcon.png";
import profileImg from "../assets/images/Bkoz-Header-Logo.png";

//nft 비디오 & 버튼 이미지
import nftVideoCompact from "../assets/video/BKOZ_Compact.MP4";
import nftVideoFounders from "../assets/video/BKOZ_Founders.MP4";
import nftSoldOut from "../assets/images/main/main--nft--sold--out--btn.png";
import nftPreparingForSale from "../assets/images/main/main--nft--preparingForSale--btn.png";


function Main() {

  //게임 방 섹션의 게임 셀렉트
    const [selectedGame, setSelectedGame] = useState('Game Name');
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(false);
    }, [selectedGame]);
    const handleContainerClick = () => {
        setIsActive(!isActive);
    };
    const handleGameClick = (gameName) => {
        setSelectedGame(gameName);
    };
    
  //게임 랭크 섹션의 게임 셀렉트
    const [selectedGame2, setSelectedGame2] = useState('Game Name');
    const [isActive2, setIsActive2] = useState(false);
    useEffect(() => {
        setIsActive(false);
    }, [selectedGame]);
    const handleContainerClick2 = () => {
        setIsActive2(!isActive2);
    };
    const handleGameClick2 = (gameName) => {
        setSelectedGame2(gameName);
    };


    const gameRooms = Array(8).fill({
      registration: "Registration Open",
      prizePool: "10 AVAX",
      dateTime: "Sat, 04 Nov 2024 14:40:00 UTC+0",
      title: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
      participants: "01/30",
      matchType: "Single",
      platform: "Mobile",
      demoImg: demoImg, 
      profileImg: profileImg,
      username: "nisoft"
    });




  return (
    <div className="main">
      <section className="main--visual--banner">
        <div className="main--visual--banner--img">
          {/* 베너1 */}
          <ParticlesComponent id="particles"/>
          {/* <div className="img--demo">사진1</div> */}
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={false}
            pagination={{
              clickable: true,
            }}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: true  // 사용자 상호작용 후에도 자동 재생 계속
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* <img src={mainBannerImg1} alt="bannerImg1"/> */}
              <div className="main--banner--img"></div>
              <p className="main--banner--title">
              “Expand the boundaries of your knowledge and test your intelligence by competing against bright minds from around the world.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="main--banner--img two--img"></div>
              <p className="main--banner--title">
              “dsal;kjasdl;fgn; sdlkgjence by competing against bright minds from around the world.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* main--visual--banner--END-- */}
      <section className="main--card--genre">
        <div className="main__container">
          <Swiper
            navigation={true}
            modules={[ Navigation, Pagination]}
            className="card--genre--swiper"
          >
            <SwiperSlide className="card--genre--list">
              <div className="card--genre--list--container">
                <div className="card--genre--left--text">
                  <dl>
                    <dt className="card--genre--title">Card genre</dt>
                    <dd>
                      Experience the pinnacle of intellectual competition through Quantum Minds at BKOZ ARENA
                      <br /><br/>
                      A blockchain-based Mind Esports platform. On the stage of intelligence where transparency and reliability are combined, you will engage in a thrilling mental battle with global competitors in an environment that boasts perfect fairness. Every move is accurately recorded on an immutable ledger, and your cognitive superiority and strategic skills will lead you to victory. 
                    </dd>
                  </dl>
                </div>
                <div className="card--genre--right--img">
                  <img src={mainCardGenreRightImg} alt="cardImg" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card--genre--list">
              <div className="card--genre--list--container">
                <div className="card--genre--left--text">
                  <dl>
                    <dt className="card--genre--title">Card genre</dt>
                    <dd>
                      Experience the pinnacle of intellectual competition through Quantum Minds at BKOZ ARENA
                      <br /><br/>
                      A blockchain-based Mind Esports platform. On the stage of intelligence where transparency and reliability are combined, you will engage in a thrilling mental battle with global competitors in an environment that boasts perfect fairness. Every move is accurately recorded on an immutable ledger, and your cognitive superiority and strategic skills will lead you to victory. 
                    </dd>
                  </dl>
                </div>
                <div className="card--genre--right--img">
                  <img src={mainCardGenreRightImg} alt="cardImg" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="see--more--genres--btn"><p>See more genres</p></button>
        </div>
      </section>
      {/* main--card--genre--END-- */}
      <section className="network--section">
        <div className="main--container">
          <article className="network--header">
            <p className="network--title">NETWORK</p>
            <div className="network--small--title">
              <div className="base--coin--txt">
                <img src={baseCoinIcon} alt="baseCoinImg"/>
                BASE
              </div>
              <dl>
                <dt>Chain ID</dt>
                <dd>137(0X89)</dd>
              </dl>
              <dl>
                <dt>Currency</dt>
                <dd>ETH</dd>
              </dl>
            </div>
            {/* network--small--title--END-- */}
          </article>
          <article className="network--body">
            <div className="network--box--list">
              <img src={mainNetworkMaticIcon} alt="maticIcon" />
              <dl className="matic--price">
                <dt>MATIC Price</dt>
                <dd>00</dd>
              </dl>
            </div>
            <div className="network--box--list">
              <img src={mainNetworkMaticIcon} alt="maticIcon" />
              <dl>
                <dt>Population</dt>
                <dd>00</dd>
              </dl>
            </div>
            <div className="network--box--list">
              <img src={mainNetworkMaticIcon} alt="maticIcon" />
              <dl>
                <dt>TOURNAMENTS TRANSACTIONS</dt>
                <dd>00</dd>
              </dl>
            </div>
            <div className="network--box--list">
              <img src={mainNetworkMaticIcon} alt="maticIcon" />
              <dl>
                <dt>ETH Gas fee</dt>
                <dd>0</dd>
              </dl>
            </div>
          </article>
        </div>
      </section>
      {/* network--section--END-- */}
      <section className="game--room--section">
        <div className="main--container">
          <article className="game--room--header">
            <dl className="game--room--titles">
              <dt>Game Room</dt>
              <dd>We at <span>Bkoz</span> will inform you of real-time rankings.</dd>
            </dl>
            <div className="game--select--box">
              <div className={`game--select--box--list ${isActive ? 'active' : ''}`} onClick={handleContainerClick}>
                <p className="select--title"><span>{selectedGame}</span></p>
                <ul className="select--list">
                  <li onClick={() => handleGameClick('Game Name1')}>Game Name1</li>
                  <li onClick={() => handleGameClick('Game Name2')}>Game Name2</li>
                  <li onClick={() => handleGameClick('Game Name3')}>Game Name3</li>
                  <li onClick={() => handleGameClick('Game Name4')}>Game Name4</li>
                  <li onClick={() => handleGameClick('Game Name5')}>Game Name5</li>
                  <li onClick={() => handleGameClick('Game Name6')}>Game Name6</li>
                </ul>
              </div>
              <button className="game--room--see--all--btn" type="button">See All</button>
            </div>
          </article>
          {/* game--room--header--END-- */}
          <article className="game--room--body">
          {gameRooms.map((room, index) => (
            <div key={index} className="game--room--list--item">
              <p className="top--title"><span>{room.registration}</span></p>
              <div className="main--content--cover">
                <dl className="main--content"
                  style={{
                    background: `url(${room.demoImg}) no-repeat center center`,
                    backgroundSize: 'cover'
                  }}
                >
                  <dt className="main--content--title">
                    Prize Pool <p><span>{room.prizePool}</span></p>
                  </dt>
                  <dd>{room.dateTime}</dd>
                </dl>
              </div>
              <dl className="game--room--bottom--box">
                <dt className="game--room--title">{room.title}</dt>
                <dd>
                  <p className="people--number"><span>{room.participants}</span></p>
                  <p><span>{room.matchType}</span></p>
                  <p><span>{room.platform}</span></p>
                </dd>
              </dl>
              <div className="profile--box"><img src={room.profileImg} alt="profile" />{room.username}</div>
            </div>
          ))}
            {/* <div className="game--room--list--item">
              <p className="top--title"><span>Registration Open</span></p>
              <div className="main--content--cover">
                <dl className="main--content"
                  style={{
                    background: `url(${demoImg}) no-repeat center center`,
                    backgroundSize: 'cover' 
                  }}
                >
                  <dt className="main--content--title">
                      Prize Pool <p><span>10</span>AVAX</p>
                  </dt>
                  <dd>Sat, 04 Nov 2024 14:40:00 UTC+0</dd>
                </dl>
              </div>
              <dl className="game--room--bottom--box">
                <dt className="game--room--title">Lorem ipsum dolor sitameta sdfsdfsdfsdfectetur sc e le risagdasfhsadfh</dt>
                <dd>
                  <p className="people--number"><span>01/30</span></p>
                  <p><span>Single</span></p>
                  <p><span>Mobile</span></p>
                </dd>
              </dl>
              <div className="profile--box"><img src={profileImg} alt=""/>nisoft</div>
            </div> */}
          </article>
          {/* game--room--body--END-- */}
        </div>
        {/* main--container--END-- */}
      </section>
      {/* game--room--section--END-- */}
      <section className="realtime--section">
        <p className="realtime--title">REALTIME</p>
        <div className="marguee--container">
          <Marquee
            direction="left"
            speed={15}
            gradient={false}
            // gradientColor={"black"}
            autoFill={true}
            // play={false}
          >
            <div className="marquee__content">
              <dl className="realtime--item down--arrow">
                <dt>WAVAX</dt>
                <dd>$2,508.29 - 1.56%</dd>
              </dl>
            </div>
            <div className="marquee__content">
              <dl className="realtime--item up--arrow">
                <dt>USDC</dt>
                <dd>$1,204 + 5.42%</dd>
              </dl>
            </div>
            <div className="marquee__content">
              <dl className="realtime--item up--arrow">
                <dt>MPT</dt>
                <dd>$1,204 + 5.42%</dd>
              </dl>
            </div>
          </Marquee>
        </div>
      </section>
      {/* realtime--section--END-- */}
      <section className="game--rank--section">
        <div className="main--container">
          <article className="game--rank--header">
            <dl className="game--rank--titles">
              <dt>Game Rank</dt>
              <dd>We at <span>Bkoz</span> will inform you of real-time rankings.</dd>
            </dl>
            <div className="game--rank--select--box">
              <div className={`game--select--box--list ${isActive2 ? 'active' : ''}`} onClick={handleContainerClick2}>
                <p className="select--title"><span>{selectedGame2}</span></p>
                <ul className="select--list">
                  <li onClick={() => handleGameClick2('Game Name1')}>Game Name1</li>
                  <li onClick={() => handleGameClick2('Game Name2')}>Game Name2</li>
                  <li onClick={() => handleGameClick2('Game Name3')}>Game Name3</li>
                  <li onClick={() => handleGameClick2('Game Name4')}>Game Name4</li>
                  <li onClick={() => handleGameClick2('Game Name5')}>Game Name5</li>
                  <li onClick={() => handleGameClick2('Game Name6')}>Game Name6</li>
                </ul>
              </div>
              <button className="game--rank--see--all--btn" type="button">See All</button>
            </div>
          </article>
          {/* game--rank--header--END-- */}
          <article className="game--rank--body">
            <div className="game--rank--item">
              <div className="item--profile--img"><img src={demoImg} alt="profileImg"/></div>
              <div className="top--total--score--box">
                <dl>
                  <dt>Top Score</dt>
                  <dd>100000</dd>
                </dl>
                <dl>
                  <dt>Total Score</dt>
                  <dd>100000</dd>
                </dl>
              </div>
              <button className="view--profile--btn">View Profile</button>
            </div>
            <div className="game--rank--item">
              <div className="item--profile--img"><img src={demoImg} alt="profileImg"/></div>
              <div className="top--total--score--box">
                <dl>
                  <dt>Top Score</dt>
                  <dd>100000</dd>
                </dl>
                <dl>
                  <dt>Total Score</dt>
                  <dd>100000</dd>
                </dl>
              </div>
              <button className="view--profile--btn">View Profile</button>
            </div>
            <div className="game--rank--item">
              <div className="item--profile--img"><img src={demoImg} alt="profileImg"/></div>
              <div className="top--total--score--box">
                <dl>
                  <dt>Top Score</dt>
                  <dd>100000</dd>
                </dl>
                <dl>
                  <dt>Total Score</dt>
                  <dd>100000</dd>
                </dl>
              </div>
              <button className="view--profile--btn">View Profile</button>
            </div>
          </article>
          {/* game--rank--body--END-- */}
        </div>
        {/* main--container--END-- */}
      </section>
      {/* game--rank--section--END-- */}
      <section className="compact--nft--section">
        <article className="ntt--item">
          <p className="nft--top--title">BKOZ COMPACT NFT</p>
          <div className="nft--item--content">
            <div className="video">
              <video
                src={nftVideoCompact}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <dl className="nft--number--txt">
              <dt>NFT Issued Amount</dt>
              <dd>750,000</dd>
            </dl>
            <dl className="nft--number--txt">
              <dt>Token Reward</dt>
              <dd>1,000,000,000 BKOZ</dd>
            </dl>
            <div className="progress--bar--box">
              <dl>
                <dt>
                    <p>750,000 of 750,000</p>
                    <p>80%</p>
                </dt>
                <dd>
                  <div className="progress--bar--cover">
                    <div className="progress--bar" style={{width:'80%'}}></div>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="sold--out--btn"><img src={nftSoldOut} alt="nftSoldOutImg"/></div>
          </div>
          {/* nft--item--content--END-- */}
        </article>
        <article className="ntt--item">
          <p className="nft--top--title">BKOZ FOUNDERS NFT </p>
          <div className="nft--item--content">
            <div className="video founders--video">
              <video
                src={nftVideoFounders}
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <dl className="nft--number--txt">
              <dt>NFT Issued Amount</dt>
              <dd>750,000</dd>
            </dl>
            <dl className="nft--number--txt">
              <dt>Token Reward</dt>
              <dd>1,000,000,000 BKOZ</dd>
            </dl>
            <div className="progress--bar--box">
              <dl>
                <dt>
                    <p>750,000 of 750,000</p>
                    <p>40%</p>
                </dt>
                <dd>
                  <div className="progress--bar--cover">
                    <div className="progress--bar" style={{width:'40%'}}></div>
                  </div>
                </dd>
              </dl>
            </div>
            <div className="sold--out--btn"><img src={nftPreparingForSale} alt="nftSoldOutImg"/></div>
          </div>
          {/* nft--item--content--END-- */}
        </article>
      </section>
      {/* compact--nft--section--END-- */}
    </div>
  );
}

export default Main;
