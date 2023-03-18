import { TasksModel } from "../../../../MODELS/TasksModel";
import "./TaskCard.css";

interface TasksCardProps
{task: TasksModel;}

function TaskCard(props: TasksCardProps): JSX.Element {
    return (
        <div className="TaskCard">
			<p>ID: {props.task.id}</p>
            <p>Task: {props.task.title}</p>
            <p> Description: {props.task.description}</p>
            <p>Group: {props.task.group}</p>
            <p>When: {props.task.when}</p>
           
        </div>
    );
}

export default TaskCard;
