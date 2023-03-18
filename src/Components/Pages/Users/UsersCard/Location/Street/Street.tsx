import { IStreet } from "../../../../../../MODELS/UsersModel";
import "./Street.css";

interface StreetProps
{ street: IStreet;}

function Street(props: StreetProps): JSX.Element {
    return (
        <div className="Street">
			<p>Adress: {props.street.name} - {props.street.number}</p>
        </div>
    );
}

export default Street;
