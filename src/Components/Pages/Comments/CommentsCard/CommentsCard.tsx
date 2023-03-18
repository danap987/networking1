import { CommentsModel } from "../../../../MODELS/CommentsModel";
import "./CommentsCard.css";

interface CommentCardProps
{comment: CommentsModel;}

function CommentsCard(props: CommentCardProps): JSX.Element {
    return (
        <div className="CommentsCard">
			<p>ID: {props.comment.id}</p>
            <p>Name: {props.comment.name}</p>
            <p> Email: {props.comment.email}</p>
            <p>Comment: {props.comment.body}</p>
        </div>
    );
}

export default CommentsCard;
