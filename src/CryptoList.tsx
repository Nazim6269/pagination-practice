import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import Pagination from "./Pagination";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  image: string;
}

const CryptoList = () => {
  const [coinsData, setCoinsData] = useState<CoinData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [imagePerPage, setImagePerPage] = useState(12);

  const lastIndex = currentPage * imagePerPage;
  const firstIndex = lastIndex - imagePerPage;
  const currentData = coinsData.slice(firstIndex, lastIndex);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API);
        const data: CoinData[] = await response.json();
        setCoinsData(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          border: "12px",
          gap: "3px",
        }}
      >
        {currentData.map((item) => (
          <CryptoCard key={item.id} item={item} />
        ))}
        <Pagination
          totalPosts={coinsData.length}
          postPerPage={imagePerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default CryptoList;
