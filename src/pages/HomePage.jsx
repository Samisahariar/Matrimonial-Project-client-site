import { AuthContext } from '../components/AuthInformation';
import { useContext } from 'react';
import HomePageCarousel from '../components/HomePageCarousel';
import PremiumSection from '../components/PremiumSection';
import { ThreeDCardDemo } from '@/components/ui/ThreeDCardDemo';


const HomePage = () => {

    const { name } = useContext(AuthContext);

    return (
        <div>
            <HomePageCarousel></HomePageCarousel>
            <PremiumSection></PremiumSection>
            <ThreeDCardDemo></ThreeDCardDemo>
        </div>
    );
};

export default HomePage;