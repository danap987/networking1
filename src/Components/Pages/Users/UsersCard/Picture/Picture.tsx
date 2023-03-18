import { IPicture } from "../../../../../MODELS/UsersModel";
import "./Picture.css";

interface PictureProps
{picture: IPicture;}
function Picture(props: PictureProps): JSX.Element {
    return (
        <div className="Picture">
			<p> large: {props.picture.large}</p>
            <p> medium:{props.picture.medium}</p>
            <p>thumbnail:{props.picture.thumbnail}</p>
        </div>
    );
}

export default Picture;
