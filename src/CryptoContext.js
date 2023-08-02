import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [showTooManyReqError, setShowTooManyReqError] = useState(false);

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  const apiFetcher = async (apiConfig) => {
    try {
      const res = await axios.get(apiConfig);
      return { data: res.data };
    } catch (err) {
      setShowTooManyReqError(true);
      return { data: [] };
    }
  };

  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        showTooManyReqError,
        setShowTooManyReqError,
        apiFetcher,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
