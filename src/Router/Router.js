import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "../Pages/Error/404/404";
import Home from "../Pages/Home/Home";
import Events from "../Pages/WhatsOn/Events/Events";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error404 />} />
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </BrowserRouter>
    )
}