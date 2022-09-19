import { Route, Routes } from 'react-router-dom';
import { Stays } from "../pages/Stays/Stays";
import { Hotel } from "../pages/Hotel/Hotel";
import { SignIn } from "../pages/SignIn/SignIn";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/stays" element={<Stays/>} />
            <Route path="/hotel/:id" element={<Hotel />} />
            <Route path="/sing-in" element={<SignIn />} />
            <Route path="/*" element={<Stays />} />
        </Routes>
    );
};