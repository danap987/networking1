import { IUser, UsersModel } from "../../../../MODELS/UsersModel";
import Users from "../Users";
import UsersCard from "../UsersCard/UsersCard";
import "./ResultsCard.css";
interface ResultCardProps
{result:UsersModel }
function ResultsCard(props: ResultCardProps): JSX.Element {
    return (
        <div className="ResultsCard">
			{/* <p>I {props.result.results[]}</p> */}

{/* 
             <p>ID: {props.result.results.id.name}</p>
            <p>Gender: {props.result.results.gender}</p>
            <p>Name: {props.result.name?.first} {props.result.name?.last}</p>
            <p>Adress: {props.result.location?.country}{props.result.location?.city}</p> 
             */}
        </div>
    );
}

export default ResultsCard;
