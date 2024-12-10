import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Dashboard, Login} from "./pages"

export default function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<Route404/>}/>
            </Routes>
        </Router>
    )
}

function Route404() {
    return (
        <div>
            <h1>404</h1>
        </div>
    )
}