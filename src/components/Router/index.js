import React from "react";
import { Routes, Route } from "react-router-dom";

import Drawer from '../Drawer'
import Pantry from '../Pantry'
import Cabinet from '../Cabinet'

export default function (props) {
    return (
        <Routes>
            <Route path="/drawer" element={<Drawer />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/cabinet" element={<Cabinet />} />
        </Routes>
    );
}