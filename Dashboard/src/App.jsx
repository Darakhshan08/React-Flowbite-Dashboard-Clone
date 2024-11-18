import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Authlayout from './Layout/Authlayout';
import Userlist from './Pages/Userlist';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import Pagenotfound from './Pages/Pagenotfound';
import Maintenance from './Pages/Maintenance';
import Servererror from './Pages/Servererror';
import Product from './Pages/Product';
import Forgotpassword from './Auth/Forgotpassword';
import Pricing from './Pages/Pricing';
import Resetpassword from './Auth/Resetpassword';
import Setting from './Pages/Setting';
import Inbox from './Pages/Inbox';
import Line_Chart from './Component/Line_Chart';
import Area1Chart from './Component/Area1Chart';
import PieCharts1 from './Component/PieCharts1';
import Dashboard from './Pages/Dashboard';
import DashboardMap from './Component/DashboardMap';
import Compose from './Pages/Compose';
function App() {
  return (
    <div className="App">
  
       <BrowserRouter>
       {/* <Authlayout> */}
       <Routes>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Userlist' element={<Userlist/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Pagenotfound' element={<Pagenotfound/>}/>
        <Route path='/Maintenance' element={<Maintenance/>}/>
        <Route path='/Servererror' element={<Servererror/>}/>
        <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Resetpassword' element={<Resetpassword/>}/>
        <Route path='/Setting' element={<Setting/>}/>
        <Route path='/Inbox' element={<Inbox/>}/>
        <Route path='/Line_Chart' element={<Line_Chart/>}/>
        <Route path='/Area1Chart' element={<Area1Chart/>}/>
        <Route path='/PieCharts1' element={<PieCharts1/>}/>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='DashboardMap' element={<DashboardMap/>}/>
        <Route path='Compose' element={<Compose/>}/>
       </Routes>
       {/* </Authlayout> */}
      </BrowserRouter>   

    </div>
  )
}

export default App
