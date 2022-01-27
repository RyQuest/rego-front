import React from 'react';
import { Link } from 'react-router-dom';

function SectionHeader(props) {
  return (
  <div>
      {/* <!-- ==========Page Header Section Start Here========== --> */}
    <section className="page-header-section style-1 light-version">
        <div className="container">
            <div className="page-header-content">
                <div className="page-header-inner">
                    <div className="page-title">
                        <h2>Create NFT{props.name} </h2>
                    </div>
                    <ol className="breadcrumb">
                        <li><Link to="/index">Home{props.Deatils}</Link></li>
                        <li className="active">Create NFT{props.activity} </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ==========Page Header Section Ends Here========== --> */}

  </div>
  )
}

export default SectionHeader;
