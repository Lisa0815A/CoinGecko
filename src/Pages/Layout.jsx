import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar'
function MainLayout(){
  return(
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
export default MainLayout;