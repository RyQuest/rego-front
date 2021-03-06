import React from "react";

import Footer from "../Components/Index/Footer";
import CommonHeader from "../Components/CommonHeader/CommonHeader";
import ResetPass from "../Components/Forgot-Password/ResetPass";
import Header from "../Components/Index/Header";
// import PreLoader from "../Components/Index/PreLoader";
import UpperStrip from "../Components/Index/UpperStrip";

export default function FougotPass() {
  return (
    <div>
      <UpperStrip />
      <Header />
      <CommonHeader heading="Forgot Password?" name="Home" active="Forgot Password" />
      <ResetPass />

      <Footer />
    </div>
  );
}
