import Navbar from "../../components/navBar/navBar";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Health from "../Health/Health";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import Technology from "../Technology/Technology";

function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        <Features />
        <Technology />
        <Health />
        <Reviews />
        <FAQ />
        </>
    )
}

export default Home;