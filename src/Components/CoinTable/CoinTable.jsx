import {useEffect, useState } from "react";
import { fetchCoinData } from "../../Services/FetchCoinData";
import { useQuery } from "@tanstack/react-query";

function CoinTable({currency}){ 
  const [page,setPage] = useState(1);
  const {data,isLoading,isError,error,isFetching} = useQuery({
    queryKey:['coins',page,currency],
    queryFn : ()=>fetchCoinData(page,currency),    
    cacheTime : 1000*60*2,
    staleTime : 100*60*2,
  })
  
  if(isLoading){
    return <div>Loading....</div>;
  }
  if(error){
    return <div>Error :{error.message}</div>;
  }
  
  return(
    <>    
      <div className="flex flex-col items-center justify-center gap-5 my-5 w-[80vw] mx-auto">
        {/*header of the table */}
        <div className="flex items-center justify-center w-full px-2 py-4 font-semibold bg-yellow-400 tex-black">
          <div className="basis-[35%]">
            Coin
          </div>
          <div className="basis-[25%]">
            Price
          </div>
          <div className="basis-[20%]">
            24h change value 
          </div >
          <div className="basis-[20%]">
            Market cap
          </div>
        </div>         
        <div className="flex flex-col w-[80vw] mx-auto ">
          {data && data.map((coin)=>{
            return(
              <div key={coin.id} className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent ">
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full"/>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>
                    <div>{coin.symbol}</div>
                  </div>                  
                </div>
                <div className="basis-[25%]">
                  {coin.high_24h}
                </div>
                <div className="basis-[20%]">
                  {coin.price_change_24h}
                </div>
                <div className="basis-[20%]">
                  {coin.market_cap}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button 
            disabled = {page===1}
            onClick={()=>setPage(page-1)}
            className="text-2xl text-white btn btn-primary btn-wide"
            >
              Previous
          </button>
          <button 
            onClick={()=>setPage(page+1)}
            className="text-2xl text-white btn btn-secondary btn-wide" 
            >
              Next
          </button>
        </div>
      </div>  
    </>
  )
}
export default CoinTable ;