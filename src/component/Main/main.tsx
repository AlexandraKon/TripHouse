import SearchHomes from '../Search/SearchHomes';
import { HomesContent} from '../../data/data';
import { AvailableHotels } from "./AvailableHotels";
import { Offers } from "./Offers";
import { PopularHotels } from "./PopularHotels";

export const Main = () => {
    
    return(
        <main>
            <AvailableHotels />
            <Offers />
            <PopularHotels />
        </main>
    )
};