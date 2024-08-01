import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header"
import Roadmap from "./pages/Roadmap"
import HomePage from "./pages/HomePage"
import Demo from './components/session/SessionCard'
// import Navbar from "./components/Navbar"
import UserHome from './pages/app/UserHome' 
import History from "./pages/app/History"
import NewSession from "./pages/app/NewSession"
import Stats from './pages/app/Stats' 
import Error from "./pages/404";
import BackToTop from "./components/BackToTop";
import Aside from "./components/Aside";
import Header from './components/Header'
import Navbar from './components/Navbar'
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
    <div className="flex h-screen">
      {/* <Aside /> */}
      <div className="flex-1 h-full overflow-auto">
        <Header />
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/app/demo' element={<Demo />} />
          <Route path='/app/userHome' element={<UserHome />} />
          <Route path='/app/history' element={<History />} />
          <Route path='/app/newSession' element={<NewSession />} />
          <Route path='/app/stats' element={<Stats />} />
          <Route path='*' element={<Error />} />
          {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
        </Routes>
        <BackToTop />
        <Navbar />
      </div>
    </div>
  </BrowserRouter>

      
  );
}

export default App;
