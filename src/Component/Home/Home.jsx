import Banner from "../Banner/Banner";
import GetBlood from "./GetBlood";
import OurCollaborators from "./OurCollaborators";
import OurMission from "./OurMission";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <OurMission></OurMission>
           <OurCollaborators></OurCollaborators>
           <GetBlood></GetBlood>
        </div>
    );
};

export default Home;