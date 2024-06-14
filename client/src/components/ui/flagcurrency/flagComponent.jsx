
import React, { useEffect, useState } from "react";
import { getIpInfo } from "@/helpers/getIpInfo";

const FlagAndCurrency = () => {
  const [data, setData] = useState({ currency: "USD", flag: null });

  const getFlagAndCurrency = async () => {
    const data = await getIpInfo();
    setData({ flag: data.flag, currency: data.currency.code });
  };

  useEffect(() => {
    getFlagAndCurrency();
  }, []);

  return <section>
   
    <img src={data.flag} alt="bandera pais" />
  </section>;
};

export default FlagAndCurrency;
