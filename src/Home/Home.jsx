

import Banner from './Banner';
import Categorys from './Categorys';
import Gallery from './Gallery';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Categorys></Categorys>
            <Review></Review>
        </div>
    );
};

export default Home;