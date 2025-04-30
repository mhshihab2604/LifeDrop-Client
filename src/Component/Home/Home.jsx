import Banner from "../Banner/Banner";
import GetBlood from "./GetBlood";
import OurCollaborators from "./OurCollaborators";
import OurMission from "./OurMission";
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
            </div>
           <Banner></Banner>
           <h1>hello welcome to new mission</h1>
           <OurMission></OurMission>
           <OurCollaborators></OurCollaborators>
           <GetBlood></GetBlood>
        </div>
    );
};

export default Home;