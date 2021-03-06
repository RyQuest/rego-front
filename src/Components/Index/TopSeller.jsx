import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/images/logo/logo-letter.png";
import banner1 from "../../assets/images/seller5.png";
import banner2 from "../../assets/images/seller2.jpeg";
import banner3 from "../../assets/images/seller3.jpeg";
import banner4 from "../../assets/images/seller4.jpeg";

const limitedCollectionUrl =
  "http://nft.regoex.com:3001/users/limited-collection";

export default function TopSeller() {
  const [collectionData, setCollectionData] = useState({
    list: [],
    total: "",
    loading: true,
  });
  const { list, total, loading } = collectionData;

  const getData = async () => {
    console.log("get data hit");
    const res = await axios.post(limitedCollectionUrl, {});
    console.log("limited collection \n", res);
    setCollectionData({
      list: res.data.data,
      total: res.data.total,
      loading: false,
    });
  };
  console.log({ list });

  useEffect(() => {
    setCollectionData({ ...collectionData, loading: true });
    getData();
  }, []);
  return (
    <section className="topseller-section padding-bottom">
      <div className="container">
        <div className="section-header style-3">
          <div className="header-shape">
            <span></span>
          </div>
          <h3>Top Sellers</h3>
        </div>
        <div className="section-wrapper">
          <div className="nft-sell-wrapper">
            <div className="row justify-content-center gx-4 gy-3">
              {/* {list?.map((item, i) => ( */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        src={banner1}
                        alt="nft-img"
                        style={{ width: "227px", height: "170px" }}
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb"></div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36"></h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">Gihan Fernindo</Link>{" "}
                          </h5>
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 Rego</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* start */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        src={banner2}
                        alt="nft-img"
                        style={{ width: "227px", height: "170px" }}
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb"></div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36"></h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">Gihan Fernindo</Link>{" "}
                          </h5>
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 Rego</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}

              {/* start */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        src={banner3}
                        alt="nft-img"
                        style={{ width: "227px", height: "170px" }}
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb"></div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36"></h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">Gihan Fernindo</Link>{" "}
                          </h5>
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 Rego</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}

              {/* start */}
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="nft-item light-version style-2">
                  <div className="nft-inner">
                    <div className="nft-thumb">
                      <img
                        src={banner4}
                        alt="nft-img"
                        style={{ width: "227px", height: "170px" }}
                      />
                    </div>
                    <div className="nft-content">
                      <div className="author-thumb"></div>
                      <div className="author-details d-flex flex-wrap align-items-center gap-15">
                        <div className="author-number">
                          <h3 className="fs-36"></h3>
                        </div>
                        <div className="author-det-info">
                          <h5>
                            <Link to="author.html">Gihan Fernindo</Link>{" "}
                          </h5>
                          <p className="nft-price">
                            Price: <span className="yellow-color">0 Rego</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}

              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
