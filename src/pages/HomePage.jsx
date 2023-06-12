import Header from "../components/Layout/Header";
import HeroSection from "../components/HeroSection";

import Footer from "../components/Layout/Footer";
import BenefitsSection from "../components/BenefitsSection.jsx";
import LatestResearchSection from "../components/LatestResearchSection.jsx";
import NewsletterSection from "../components/NewsletterSection.jsx";

const HomePage = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <BenefitsSection/>
            <LatestResearchSection/>
            <NewsletterSection/>
            <Footer/>
        </>
    );
};

export default HomePage;
