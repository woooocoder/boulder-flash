import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header"
import Roadmap from "./pages/Roadmap"
import HomePage from "./pages/HomePage"
import Demo from './components/session/SessionCard'
import Navbar from "./components/Navbar"
import UserHome from './pages/app/UserHome'
import Login from './pages/Login'
import History from "./pages/app/History"
import NewSession from "./pages/app/NewSession"
import Stats from './pages/app/Stats'
import Signup from "./pages/Signup"
import Error from "./pages/404";





/*
* Dark Blue->Light Blue
* *222831 | *393E46 | *00ADB5
*
* Dark Grey->White
* 212121 | 757575 | BDBDBD | *EEEEEE | FFFFFF
*/
function App() {

  return (
      
      <BrowserRouter>
        <div className="flex-1 h-full px-8 pb-56 text-[#EEEEEE] lg:text-xl leading-loose bg-[#222831] w-full bottom-0 scroll-pt-0 scroll-pb-0">
          <Header />
          <Routes>
            <Route index path='/' element={<HomePage/>} />
            
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            <Route path='/roadmap' element={<Roadmap/>} />
            <Route path='/app/demo' element={<Demo />} />
            
            <Route path='/app/userHome' element={<UserHome />} />
            <Route path='/app/history' element={<History />}/>
            <Route path='/app/newSession' element={<NewSession />} />
            <Route path='/app/stats' element={<Stats />} />
            
            <Route path='*' element={<Error />} />
            {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>

      
  );
}

export default App;
