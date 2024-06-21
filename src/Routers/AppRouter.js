import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginScreen from '../Components/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

function AppRouter() {
    return (

        <Router>
            <div>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route path="/*" element={<DashboardRoutes />} />
                </Routes>
            </div>
        </Router>

    )
}

export default AppRouter;