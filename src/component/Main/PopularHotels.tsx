import { ErrorBlock } from "";
import { Loader } from "";
import { GetPopularHotels } from "";
import { useSelector } from "react-redux";
import {
  errorSelector,
  isLoadingSelector,
} from "";

export const PopularHotels = () => {
    const error = useSelector(errorSelector);
    const isLoading = useSelector(isloadLoadingSelector);
    
    if (error) {
        return <ErrorBlock/>;
    } else if ( isLoading ) {
        return <Loader/>;
    } else {
        return <GetPopularHotels/>;
    }
};