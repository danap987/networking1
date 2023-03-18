import { CatModel } from "../../../../MODELS/CatModel";
import "./CatCard.css";
interface CatCardProps
{cat: CatModel;}

function CatCard(props: CatCardProps): JSX.Element {
    return (
        <div className="CatCard">
			<p>ID: {props.cat.id}</p>
            <p>Name: {props.cat.name}</p>
            <p> Color: {props.cat.color}</p>
            <p>Born on: {props.cat.birthday}</p>
            <p>Weight: {props.cat.weight}</p>
            <img src={props.cat.image} alt= {props.cat.name} />
            {/* <img src={`https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg`} alt= {props.cat.name} /> */}
        </div>
    );
}

export default CatCard;
