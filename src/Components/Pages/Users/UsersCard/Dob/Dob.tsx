import { IDob } from "../../../../../MODELS/UsersModel";
import "./Dob.css";
interface DobProps
{dob: IDob;}
function Dob(props:DobProps): JSX.Element {
    return (
        <div className="Dob">
			<p>Age: {props.dob.age}</p>
            <p>Date: {props.dob.date}</p>
        </div>
    );
}

export default Dob;
