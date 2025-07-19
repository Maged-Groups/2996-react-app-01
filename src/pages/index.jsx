import { Route, Routes } from "react-router";

// Pages
import Users from "./Users";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home";


export default function Pages() {
    return (
        <Routes>
            <Route path='users' element={<Users />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='contact' element={<Contact />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}