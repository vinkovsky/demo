import Block from "@/ui/Block";
import { useEffect, useState } from "react";
import React from "react";

const Hero = () => {
  const [fromCurrency, setFromCurrency] = useState("RUB");

  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const [rates, setRates] = useState("");

  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert("ne udalos` poluchit` infu");
      });
  }, []);

  const onChangeToPrice = (value) => {
    setToPrice(value);
  };
  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[fromCurrency];
    setFromPrice(value);
    setToPrice(result);
  };

  return (
    <div className=" flex justify-center items-center my-auto h-screen gap-10">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
};

export default Hero;
