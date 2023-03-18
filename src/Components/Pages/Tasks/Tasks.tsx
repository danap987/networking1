import axios from "axios";
import { useEffect, useState } from "react";
import { TasksModel } from "../../../MODELS/TasksModel";
import TaskCard from "./TaskCard/TaskCard";
import "./Tasks.css";

function Tasks(): JSX.Element {

    const [tasks, setTasks]= useState<TasksModel[]>([]);
    
    useEffect(()=>{
        axios.get<TasksModel[]>(`https://raw.githubusercontent.com/KobiShashs/TODO-JSON/main/tasks`).then(res=>{setTasks(res.data)})
.catch(err=>{console.log(err);})},[]);

    return (
        <div className="Tasks">
		<h1>Task list:</h1>	

        {tasks.map(t=><TaskCard key={`task`+t.id} task={t} />)}

        </div>
    );
}

export default Tasks;
