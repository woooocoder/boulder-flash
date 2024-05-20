import React from "react"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"
import Roadmap from "./pages/Roadmap"
import { Link } from "react-router-dom"
import Home from "./pages/Home"


const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Link to='/'>Home</Link>
                <Link to='/roadmap'>Roadmap</Link>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/roadmap" element={<Roadmap />} />
                </Routes>
            </Router>   
        </BrowserRouter> 
    )
}

export default MyRoutes
