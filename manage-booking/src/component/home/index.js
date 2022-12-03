import React from 'react'
import { Routes, Route } from 'react-router-dom';
import DetailPost from '../../pages/DetailPost';
import HomePage from './../../pages/home/index'
const HomeComponent = () => {
  return (
    <>
        <Routes>
        <Route exact path="/home" element={<HomePage />} />
        {/* <Route path="/posts/:id" element={<DetailPost/>}/> */}
        </Routes>
    </>
  )
}

export default HomeComponent