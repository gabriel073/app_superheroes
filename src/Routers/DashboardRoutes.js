import React from 'react'
import { Navbar } from '../Components/Ui/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import HeroesScreen from '../Components/Heroes/HeroesScreen'
import DcScreen from '../Components/dc/DcScreen';
import MarvelScreen from '../Components/Marvel/MarvelScreen';
import SearchScreen from '../Components/search/SearchScreen';

function DashboardRoutes() {


    return (
        <>
            <Navbar />
            <div className='container mt-2'>
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel" />} />
                    <Route path="/hero/:heroeId" element={<HeroesScreen />} />
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                </Routes >

            </div>


        </>

    )
}

export default DashboardRoutes