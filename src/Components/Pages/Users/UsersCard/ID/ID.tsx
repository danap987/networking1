import { IId } from "../../../../../MODELS/UsersModel";
import "./ID.css";

interface IDProps
{ID: IId;}
function ID(props: IDProps): JSX.Element {
    return (
        <div className="ID">
			<p>ID:{props.ID.name}</p>
            <p> Value:{props.ID.value}</p>
        </div>
    );
}

export default ID;
