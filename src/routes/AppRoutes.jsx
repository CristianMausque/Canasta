import React from 'react'
import { Route, Routes } from "react-router-dom"
import ServicesPage from "../pages/ServicesPage/ServicesPage"
import HomePage from "../pages/HomePage/HomePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/work" element={<WorkPage />} /> */}
            {/* <Route path="*" element={<h1> 404 </h1>} /> */}
        </Routes>
    )
}

export default AppRoutes