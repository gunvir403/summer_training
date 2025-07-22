import BottomSiteNavigation from './BottomSiteNavigation'
import TopNavigationBar from './TopNavigationBar'
import ShoesSection from './ShoesSection'
import BrandBanner from './BrandBanner'
import BlackRibbon from './BlackRibbon'
import SliderCards from './SliderCards'
import BlueBar from './BlueBar'


const Home = () => {
    return (
        <div>
            <BlackRibbon />
            <TopNavigationBar />
            <BrandBanner />
            <ShoesSection />
            <SliderCards />
            <BlueBar />
            <BottomSiteNavigation />
        </div>
    )
};

export default Home;