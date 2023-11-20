import React from "react";
import Button from "../components/Button/Button";
import imageHero from "assets/images/img-hero.jpg";
import imageHeroFrame from "assets/images/img-hero-frame.jpg";
import iconTraveller from "assets/images/icons/ic_traveler.svg";
import iconCities from "assets/images/icons/ic_cities.svg";
import iconTreasure from "assets/images/icons/ic_treasure.svg";
import formatNumber from "../utils/formatNumber.js";
import Fade from "react-reveal/Fade";

const Hero = (props) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  return (
    <Fade bottom>
      <section className="container hero">
        <div className="row align-items-center" style={{ margin: 0 }}>
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold mb-3">
              Forget Busy Work, <br />
              Start Next Vacation{" "}
            </h1>
            <p className="text-gray-500 mb-5 w-75">
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              isPrimary
              hasShadow
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={iconTraveller}
                  alt={`${props.data.travelers}`}
                  width={36}
                  height={36}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.travelers)} travellers
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={iconTreasure}
                  alt={`${props.data.treasures}`}
                  width={36}
                  height={36}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.treasures)} treasures
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src={iconCities}
                  alt={`${props.data.cities}`}
                  width={36}
                  height={36}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.cities)} cities
                </h6>
              </div>
            </div>
          </div>

          <div className="col-6 pl-5 ms-auto">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={imageHero}
                alt="Room with balcoon"
                className="img-fluid position-absolute"
                style={{
                  margin: "-30px 0 0 -30px",
                  zIndex: 1,
                  width: 520,
                  height: 410,
                }}
              />
              <img
                src={imageHeroFrame}
                alt="Room with balcoon frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0", width: 520, height: 410 }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
