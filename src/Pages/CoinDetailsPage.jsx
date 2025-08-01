import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {fetchCoinDetails} from '../Services/fetchCoinDetails';
import parse from 'html-react-parser';
import currencyStore from '../States/store';

function CoinDetailsPage(){
  const {currency} = currencyStore();
  const {coinid} = useParams();
  const {isError,isLoading,data:coin} = useQuery
  ({
    queryKey: ['coinid', coinid],
    queryFn: () => fetchCoinDetails(coinid),
    cacheTime : 1000*60*2,
    staleTime : 100*60*2,
  });
  
  if(isLoading){
    return <div>DownLoading coin data...</div>
  }
  if(isError){
    return <div>Error: something went wrong</div>
  }
  
  return(
    <>
    <div className="flex flex-col md:flex-row ">
      <div
        className="flex flex-col items-center w-full mt-6 border-r-2 border-gray-500 md:w-1/3 md:mt-0"
      >
        <img
        alt={coin?.name}
          src={coin?.image?.large}
          className="mb-5 h-52 "
        />
        <h1 className="mb-5 text-4xl font-bold">{coin?.name}</h1>
        <p 
          className="w-full px-6 py-4 text-justify"
        >
          {parse(coin?.description?.en)}
        </p>
        <div
          className="flex flex-col items-center w-full gap-5 mt-5 md:flex-row md:justify-around"
        >
          <div
          className="flex items-center mb-4 md:mb-0 "
          >
            <h2 className="font-bold xl ">Rank</h2>
            <span className="ml-3 text-xl ">
              {coin?.market_cap_rank}
            </span>
          </div>
          <div
          className="flex items-center mb-4 md:mb-0 "
          >
            <h2 className="font-bold text-yellow-500 xl">Current price</h2>
            <span className="ml-3 text-xl ">
              {coin?.market_data.current_price[currency]}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full p-6 md:w-2/3">
        coin information.
      </div>
    </div>
    </>
  )
}
export default CoinDetailsPage;