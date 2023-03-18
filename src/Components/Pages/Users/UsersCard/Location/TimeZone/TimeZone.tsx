import { ITimezone } from "../../../../../../MODELS/UsersModel";
import "./TimeZone.css";
interface TimeZoneProps
{timeZone: ITimezone;}

function TimeZone(props:TimeZoneProps): JSX.Element {
    return (
        <div className="TimeZone">
			<p>Offset: {props.timeZone.offset}</p>
            <p>Description: {props.timeZone.description}</p>
        </div>
    );
}

export default TimeZone;
