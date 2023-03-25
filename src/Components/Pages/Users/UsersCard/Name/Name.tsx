import { IName } from "../../../../../MODELS/UsersModel";
import "./Name.css";

interface NameProps
{name: IName;}
function Name(props: NameProps): JSX.Element {
    return (
        <div className="Name">
			{/* <p>Name: {props.name.title}{props.name.first} {props.name.last}</p> */}
        </div>
    );
}

export default Name;
