import React, { createContext } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const asset = "daimond";
  const [money, setMoney] = React.useState(500);
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Net Money:{money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
