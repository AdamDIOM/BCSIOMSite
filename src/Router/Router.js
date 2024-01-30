import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../Pages/Error/404/404";
import Home from "../Pages/Home/Home";
import Events from "../Pages/WhatsOn/Events/Events";
import Committee from "../Pages/About/Committee/Committee";
import ComingSoon from "../Pages/Error/ComingSoon/ComingSoon";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/committee" element={<Committee />} />
                <Route path="/about-us" element={<ComingSoon />} />
                <Route path="/get-online" element={<ComingSoon />} />
                <Route path="/iom-tech" element={<ComingSoon />} />
            </Routes>
        </BrowserRouter>
    )
}