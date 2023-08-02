import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import { CryptoState } from "../CryptoContext";
import TransitionsModal from "../components/TransitionModal";

const HomePage = () => {
  const { showTooManyReqError = false } = CryptoState();
  return (
    <>
      <Banner />
      <CoinsTable />
      {showTooManyReqError && (
        <TransitionsModal
          title="Too many requests!"
          description={
            "Api limit is reached, please try again after a few minutes."
          }
        />
      )}
    </>
  );
};

export default HomePage;
