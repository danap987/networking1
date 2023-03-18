import { ICoordinates } from "../../../../../../MODELS/UsersModel";
import "./Coordinate.css";
interface CoordinateProps
{
   coordinate: ICoordinates; 
}

function Coordinate(props:CoordinateProps): JSX.Element {
    return (
        <div className="Coordinate">
            <p> latitude/ longitude= {props.coordinate.latitude}/{props.coordinate.longitude}</p>
        </div>
    );
}

export default Coordinate;
