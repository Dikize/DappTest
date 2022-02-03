import React from "react";
import Banner from "../components/pageCrypto/Banner/Banner";
import CoinsTable from "../components/pageCrypto/CoinsTable";

import Header from "../components/pageCrypto/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Banner />
      <CoinsTable />
    </>
  );
};

export default Homepage;
