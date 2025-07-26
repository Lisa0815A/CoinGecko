import { Route,Routes } from "react-router-dom";
import { lazy ,Suspense} from "react";
import MainLayout from "../../Pages/Layout";
import {Facebook} from 'react-content-loader';
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary ";
const Home = lazy(() => import('../../Pages/Home'));
const CoinDetailsPage = lazy(()=>import('../../Pages/CoinDetailsPage'))
function Routing(){
  return(
    <>
      <CustomErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route index element={
              <Suspense fallback={<Facebook/>}>
                <Home/>
              </Suspense>            
            }/>
            <Route path="details/:coinid" element={
              <Suspense fallback={<Facebook/>}>
                <CoinDetailsPage/>
              </Suspense>
            }/>
          </Route>                
        </Routes>
      </CustomErrorBoundary>      
    </>
  )
}
export default Routing;