import React from "react";
import { Link } from "react-router-dom";

import bprak from "../../assets/images/bprak.png";
import banner1 from "../../assets/images/blog1.jpg";
import banner2 from "../../assets/images/blog2.png";
import banner3 from "../../assets/images/blog3.jpeg";
import banner4 from "../../assets/images/banner4.jpg";

export default function BlogSection() {
  return (
    <section className="blog-section pb-120">
      <div className="container">
        <div className="section-header style-3">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Our Blog Posts</h3>
        </div>
        <div className="section-wrapper">
          <div className="blog-wrapper">
            <div className="row justify-content-center gx-4 gy-2">
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version blog-item">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img src={banner1} alt="blog-img" />
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          {/* <Link to="">
                            The Rise of the Non Fungible Tokens (NFTs)
                          </Link>{" "} */}
                          <a target={"_blank"} href="https://www.forbes.com/sites/forbesbusinesscouncil/2021/11/19/the-future-of-nfts-digital-entertainment-at-its-finest/?sh=2b45eddf22ac">
                            The Rise of the Non Fungible Tokens (NFTs)</a>
                        </h4>
                        <div className="meta-info">
                          <p>
                            <span>
                              <i
                                className="icofont-ui-calendar"
                                data-blast="color"
                              ></i>
                            </span>
                            July 20 2021
                          </p>
                          <p>
                            <span>
                              <i
                                className="icofont-user"
                                data-blast="color"
                              ></i>
                            </span>
                            Jhon doe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version blog-item">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img src={banner2} alt="blog-img" />
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          <Link to="blog-single.html">
                            {" "}
                            Top 5 Most Popular NFT Games in 2021
                          </Link>
                        </h4>
                        <div className="meta-info">
                          <p>
                            <span>
                              <i
                                className="icofont-ui-calendar"
                                data-blast="color"
                              ></i>
                            </span>
                            July 20 2021
                          </p>
                          <p>
                            <span>
                              <i
                                className="icofont-user"
                                data-blast="color"
                              ></i>
                            </span>
                            Rassel H.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="nft-item light-version blog-item">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img src={banner3} alt="blog-img" />
                    </div>
                    <div className="nft-content">
                      <div className="author-details">
                        <h4>
                          {/* <Link to="blog-single.html">
                            Best NFT Selling Marketplace website
                          </Link> */}
                          <a target={"_blank"} href="https://www.bloombergquint.com/bq-brand-studio/how-nfts-will-change-the-world-in-2022-5-key-trends">
                          Best NFT Selling Marketplace website
                            </a>
                        </h4>
                        <div className="meta-info">
                          <p>
                            <span>
                              <i
                                className="icofont-ui-calendar"
                                data-blast="color"
                              ></i>
                            </span>
                            July 20 2021
                          </p>
                          <p>
                            <span>
                              <i
                                className="icofont-user"
                                data-blast="color"
                              ></i>
                            </span>
                            Alex zym
                          </p>
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
