import Header from "./Header";
import {SideBar} from "./SideBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Support24h from "./Support24h";
import RecentProperty from "./RecentProperty";
import MostPopular from "./MostPopular";
import Agent from "./Agent";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <SideBar/>
            <Support24h/>
            <RecentProperty/>
            <MostPopular/>
            <Agent/>
            <Testimonial/>
            <Footer/>
        </>
    )
}