import React from "react";
import { Link } from "react-router-dom";
// import {swiper} from "../assets/js/functions.js"

import bprak from "../../assets/images/bprak.png";
import banner1 from "../../assets/images/banner1-temp.jpeg";
import banner2 from "../../assets/images/banner2-temp.jpeg";
import banner3 from "../../assets/images/banner3-temp.png";
import banner4 from "../../assets/images/banner3-temp.png";

export default function Banner() {
  return (
    <section
      className="banner-section light-version"
      style={{ backgroundImage: `url(${"../assets/images/banner/bg-4.png"}` }}
    >
      <div className="container">
        <div className="banner-wrapper">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="banner-content">
                <h1>
                  <span className="theme-color" data-blast="color">
                    Exclusive
                  </span>{" "}
                  Celebrity <br />
                  <span className="theme-color" data-blast="color">
                    NFT
                  </span>{" "}
                  Marketplace
                </h1>

                <div className="banner-btns d-flex flex-wrap">
                  <Link
                    data-blast="bgColor"
                    to="/explore"
                    className="default-btn move-top"
                  >
                    <span>Explore</span>{" "}
                  </Link>
                  <Link to="/auction" className="default-btn move-right">
                    <span>Add Live Auctions</span>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="nft-slider-wrapper">
                <div className="banner-item-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={bprak}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">B Praak</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="dropdown-item"
                              style={{ textAlign: "right" }}
                            >
                              <Link to="#" style={{ color: "blue" }}>
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>
                                Share
                              </Link>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img loading="lazy" src={banner1} alt="nft-img" />
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">B Praak </Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0 REGO</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={bprak}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">B Praak</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="dropdown-item"
                              style={{ textAlign: "right" }}
                            >
                              <Link to="#" style={{ color: "blue" }}>
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>
                                Share
                              </Link>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img loading="lazy" src={banner3} alt="nft-img" />

                              {/* <!-- nft countdwon --> */}
                              {/* <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                                                                                            <li>
                                                                                                                                <span className="days">34</span><span className="count-txt">D</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="hours">09</span><span className="count-txt">H</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="minutes">32</span><span className="count-txt">M</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="seconds">32</span><span className="count-txt">S</span>
                                                                                                                            </li>
                                                                                                                        </ul> --> */}
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">B Praak</Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0 REGO</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={bprak}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">B Praak</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="dropdown-item"
                              style={{ textAlign: "right" }}
                            >
                              <Link to="#" style={{ color: "blue" }}>
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>
                                Share
                              </Link>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img loading="lazy" src={banner2} alt="nft-img" />

                              {/* <!-- nft countdwon --> */}
                              {/* <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                                                                                            <li>
                                                                                                                                <span className="days">34</span><span className="count-txt">D</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="hours">09</span><span className="count-txt">H</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="minutes">32</span><span className="count-txt">M</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="seconds">32</span><span className="count-txt">S</span>
                                                                                                                            </li>
                                                                                                                        </ul> --> */}
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">B Praak</Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0 REGO</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="nft-item light-version">
                        <div className="nft-inner">
                          {/* <!-- nft top part --> */}
                          <div className="nft-item-top d-flex justify-content-between align-items-center">
                            <div className="author-part">
                              <ul className="author-list d-flex">
                                <li className="single-author d-flex align-items-center">
                                  <Link to="author.html" className="veryfied">
                                    <img
                                      loading="lazy"
                                      src={bprak}
                                      alt="author-img"
                                    />
                                  </Link>
                                  <h6>
                                    <Link to="author.html">B Praak</Link>
                                  </h6>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="dropdown-item"
                              style={{ textAlign: "right" }}
                            >
                              <Link to="#" style={{ color: "blue" }}>
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>
                                Share
                              </Link>
                            </div>
                          </div>
                          {/* <!-- nft-bottom part --> */}
                          <div className="nft-item-bottom">
                            <div className="nft-thumb">
                              <img loading="lazy" src={banner4} alt="nft-img" />

                              {/* <!-- nft countdwon --> */}
                              {/* <!-- <ul className="nft-countdown count-down" data-date="July 05, 2022 21:14:01">
                                                                                                                            <li>
                                                                                                                                <span className="days">34</span><span className="count-txt">D</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="hours">09</span><span className="count-txt">H</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="minutes">32</span><span className="count-txt">M</span>
                                                                                                                            </li>
                                                                                                                            <li>
                                                                                                                                <span className="seconds">32</span><span className="count-txt">S</span>
                                                                                                                            </li>
                                                                                                                        </ul> --> */}
                            </div>
                            <div className="nft-content">
                              <h4>
                                <Link to="item-details.html">B Praak</Link>{" "}
                              </h4>
                              <div className="price-like d-flex justify-content-between align-items-center">
                                <p className="nft-price">
                                  Price:{" "}
                                  <span className="yellow-color">0 REGO</span>
                                </p>
                                <Link to="#" className="nft-like">
                                  <i className="icofont-heart"></i>
                                  230
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
