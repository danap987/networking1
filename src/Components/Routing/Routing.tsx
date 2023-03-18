import { Route, Routes } from "react-router-dom";
import App from "../../App";
import Cat from "../Pages/Cat/Cat";
import Comments from "../Pages/Comments/Comments";
import Home from "../Pages/Home/Home";
import Page404 from "../Pages/Page404/Page404";
import Tasks from "../Pages/Tasks/Tasks";
import Users from "../Pages/Users/Users";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
		 <Route path="/" element={<App/>}/>
                <Route path="home" element={<Home />}/>
                <Route index element={<Home />}/>
                <Route path="cats" element={<Cat/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="comments" element={<Comments/>}/>
                <Route path="tasks" element={<Tasks/>}/>
                <Route path="*" element={<Page404/>}/>	
                </Routes>
        </div>
    );
}

export default Routing;
