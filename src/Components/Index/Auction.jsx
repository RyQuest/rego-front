import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sellerImage from "../../assets/images/seller/01.png";
import live1 from "../../assets/images/liveAuc1.jpeg";
import live2 from "../../assets/images/liveAuc2.jpg";
import live3 from "../../assets/images/raj1.jpg";
import live4 from "../../assets/images/liveAuc4.png";

// import "../assets/css/icofont.min.css"
// import "../assets/css/lightcase.css"
// import "../assets/css/animate.css"
// import "../assets/css/swiper-bundle.min.css"
// import "../assets/css/style.min.css"
// import "../assets/css/custom.css"
// import "../assets/js/countdown.min.js"

// const limitedCollectionUrl =
//   "http://nft.regoex.com:3001/users/limited-collection";

export default function Auction() {
  // const [collectionData, setCollectionData] = useState({
  //   list: [],
  //   total: "",
  //   loading: true,
  // });
  // const { list, total, loading } = collectionData;

  // const getData = async () => {
  //   console.log("get data hit");
  //   const res = await axios.post(limitedCollectionUrl, {});
  //   console.log("limited collection \n", res);
  //   setCollectionData({
  //     list: res.data.data,
  //     total: res.data.total,
  //     loading: false,
  //   });
  // };
  // console.log({ list });

  // useEffect(() => {
  //   setCollectionData({ ...collectionData, loading: true });
  //   getData();
  // }, []);

  return (
    <section className="auction-section padding-bottom">
      <div className="container">
        <div className="section-header style-3">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Live Auctions</h3>
        </div>
        <div className="section-wrapper">
          <div className="auction-holder">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="nft-item light-version">
                  <div className="nft-inner">
                    {/* <!-- nft top part --> */}
                    <div className="nft-item-top d-flex justify-content-between align-items-center">
                      <div className="author-part">
                        <ul className="author-list d-flex">
                          <li className="single-author"></li>
                          <li className="single-author d-flex align-items-center">
                            <h6>
                              <Link
                                to="author.html"
                                className="text-center"
                                style={{ paddingLeft: "10px" }}
                              >
                                B Praak
                              </Link>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="more-part">
                        <div className=" dropstart">
                          <Link
                            className=" dropdown-toggle"
                            to="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-offset="25,0"
                          >
                            <i className="icofont-flikr"></i>
                          </Link>

                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-warning"></i>
                                </span>{" "}
                                Report{" "}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{" "}
                                Share
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- nft-bottom part --> */}
                    <div className="nft-item-bottom">
                      <div className="nft-thumb">
                        <img src={live1} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="March 25, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">34</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">B Praak</Link>{" "}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 REGO</span>
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
                          <li className="single-author"></li>
                          <li className="single-author"></li>
                          <li className="single-author d-flex align-items-center">
                            <h6>
                              <Link
                                to="author.html"
                                style={{ paddingLeft: "10px" }}
                              >
                                Snoop Dogg
                              </Link>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="more-part">
                        <div className=" dropstart">
                          <Link
                            className="dropdown-toggle"
                            to="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-offset="25,0"
                          >
                            <i className="icofont-flikr"></i>
                          </Link>

                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-warning"></i>
                                </span>{" "}
                                Report{" "}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{" "}
                                Share
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- nft-bottom part --> */}
                    <div className="nft-item-bottom">
                      <div className="nft-thumb">
                        <img src={live2} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="March 25, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">34</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">Snoop Dogg</Link>{" "}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 REGO</span>
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
                            <h6>
                              <Link
                                to="author.html"
                                style={{ paddingLeft: "10px" }}
                              >
                                Klarens Malluta
                              </Link>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="more-part">
                        <div className=" dropstart">
                          <Link
                            className=" dropdown-toggle"
                            to="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-offset="25,0"
                          >
                            <i className="icofont-flikr"></i>
                          </Link>

                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-warning"></i>
                                </span>{" "}
                                Report{" "}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{" "}
                                Share
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- nft-bottom part --> */}
                    <div className="nft-item-bottom">
                      <div className="nft-thumb">
                        <img src={live3} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="March 25, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">10</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">Klarens Malluta</Link>{" "}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 REGO</span>
                          </p>
                          <Link to="#" className="nft-like">
                            <i className="icofont-heart"></i>
                            130
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
                          <li className="single-author"></li>
                          <li className="single-author"></li>
                          <li className="single-author d-flex align-items-center">
                            <h6>
                              <Link
                                to="author.html"
                                style={{ paddingLeft: "10px" }}
                              >
                                Big B
                              </Link>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="more-part">
                        <div className=" dropstart">
                          <Link
                            className=" dropdown-toggle"
                            to="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-offset="25,0"
                          >
                            <i className="icofont-flikr"></i>
                          </Link>

                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-warning"></i>
                                </span>{" "}
                                Report{" "}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                <span>
                                  <i className="icofont-reply"></i>
                                </span>{" "}
                                Share
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* <!-- nft-bottom part --> */}
                    <div className="nft-item-bottom">
                      <div className="nft-thumb">
                        <img src={live4} alt="nft-img" />

                        {/* <!-- nft countdwon --> */}
                        <ul
                          className="nft-countdown count-down"
                          data-date="March 25, 2022 21:14:01"
                          data-blast="bgColor"
                        >
                          <li>
                            <span className="days">34</span>
                            <span className="count-txt">D</span>
                          </li>
                          <li>
                            <span className="hours">09</span>
                            <span className="count-txt">H</span>
                          </li>
                          <li>
                            <span className="minutes">32</span>
                            <span className="count-txt">M</span>
                          </li>
                          <li>
                            <span className="seconds">32</span>
                            <span className="count-txt">S</span>
                          </li>
                        </ul>
                      </div>
                      <div className="nft-content">
                        <h4>
                          <Link to="item-details.html">Big B</Link>{" "}
                        </h4>
                        <div className="price-like d-flex justify-content-between align-items-center">
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 REGO</span>
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
    </section>
  );
}
