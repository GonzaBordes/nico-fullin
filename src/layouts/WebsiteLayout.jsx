import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const WebsiteLayout = () => {
  return (
    <div className="web-layout">
        <Header />
            <Outlet />
            <div class="background">
                <div class="container">
                <div class="red-blur"></div>
                <div class="blue-blur"></div>
                </div>     
            </div>
        <Footer />
    </div>
  )
}

export default WebsiteLayout