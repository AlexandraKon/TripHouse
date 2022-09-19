import { Route, Routes } from 'react-router-dom';

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