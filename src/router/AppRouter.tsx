import { Route, Routes } from 'react-router-dom';
import { Stays } from "";
import { Hotel } from "";
import { SingIn } from "../pages/SignIn/SignIn";


export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/stays" element={<Stays/>} />
            <Route path="/hotel/:id" element={<Hotel />} />
            <Route path="/sing-in" element={<SingIn />} />
            <Route path="/*" element={<Stays />} />
        </Routes>
    );
};