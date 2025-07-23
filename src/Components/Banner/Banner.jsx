import BannerImg from "../../assets/banner1.jpg";
function Banner(){
  return(
    <>
    <div className="relative w-full h-96">
      <img
        src={BannerImg}
        className="w-full h-full"
      />
      <div className="absolute left-0 right-0 top-20 mx-auto w-[20rem] ">
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-semibold text-white">
            Crypto Tracker
          </div>
          <div className="text-sm font-semibold text-center text-white">
            Get all information regarding Cryptocurrencies
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Banner; 