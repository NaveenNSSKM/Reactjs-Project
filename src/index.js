import React from "react";
import ReactDOM from "react-dom/client";


import { BrowserRouter,Routes,Route } from "react-router-dom";
import  Home from './Pages/Home';
import  About from './Pages/About';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';



export default function App()
{
    return (
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="About" element={<About />}/>
                <Route path="Shop" element={<Shop/>}/>
                <Route path="Contact" element={<Contact/>}/>
               
                </Route>
                </Routes>
        </BrowserRouter>
        
        );

}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>);