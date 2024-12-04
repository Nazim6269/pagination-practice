import React from "react";

import "./card.css";
import { CoinData } from "./CryptoList";

interface CoinDataProps {
  item: CoinData;
}

const CryptoCard: React.FC<CoinDataProps> = ({ item }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card_info">
        <h2>{item.name}</h2>
        <h3>${item.current_price.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default CryptoCard;
