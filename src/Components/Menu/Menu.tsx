import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<Link to="home">Home</Link>
            <Link to="cats">Cats list</Link>
            <Link to="tasks">Tasks list</Link>
            <Link to="users">Users links</Link>
            <Link to= "comments">Comments</Link>
        </div>
    );
}

export default Menu;
