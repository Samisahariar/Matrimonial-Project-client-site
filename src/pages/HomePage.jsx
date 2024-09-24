import { AuthContext } from '../components/AuthInformation';
import { useContext } from 'react';
import HomePageCarousel from '../components/HomePageCarousel';
import PremiumSection from '../components/PremiumSection';

const HomePage = () => {

    const { name } = useContext(AuthContext);

    return (
        <div>
            <HomePageCarousel></HomePageCarousel>
            <PremiumSection></PremiumSection>
        </div>
    );
};

export default HomePage;