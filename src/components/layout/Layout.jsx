import React from 'react'
import '../../index.css'
import Footer from './Footer' 
import Navbar from './NavBar'


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <main style={{ minHeight: "80vh"}}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout