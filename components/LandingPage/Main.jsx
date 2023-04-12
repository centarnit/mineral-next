import { Landing } from "./Landing";
import { AboutUs } from "./AboutUs";
import { Offers } from "./Offers";
import { Statistics } from "./Statistics";
import { Events } from "./Events";
import { Locations } from "./Locations";

export const Main = () => {
    return (
        <div className="main">
            <Landing />
            <AboutUs />
            <Offers />
            <Statistics />
            <Events />
            <Locations />
        </div>
    );
};
