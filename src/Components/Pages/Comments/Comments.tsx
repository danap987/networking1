import axios from "axios";
import { useEffect, useState } from "react";
import { CommentsModel } from "../../../MODELS/CommentsModel";
import "./Comments.css";
import CommentsCard from "./CommentsCard/CommentsCard";

function Comments(): JSX.Element {

    const [comments, setComments]= useState<CommentsModel[]>([]);
    
    useEffect(()=>{
        axios.get<CommentsModel[]>(`https://jsonplaceholder.typicode.com/comments`).then(res=>{setComments(res.data)})
.catch(err=>{console.log(err);})},[]);



    return (
        <div className="Comments">
		<h1>Comments:</h1>	

        {comments.map(c=><CommentsCard key={`comment`+c.id} comment={c} />)}

        </div>
    );
}

export default Comments;
