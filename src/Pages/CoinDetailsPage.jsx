import { useParams } from "react-router-dom";
function CoinDetailsPage(){
  const {coinid} = useParams();
  return(
    <>
    <div>
      <h1>Coin Details : {coinid}</h1>
    </div>
    </>
  )
}
export default CoinDetailsPage;