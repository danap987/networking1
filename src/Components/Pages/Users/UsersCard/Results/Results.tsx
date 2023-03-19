import axios from "axios";
import { useEffect, useState } from "react";
import { IUser, UsersModel } from "../../../../../MODELS/UsersModel";
import UsersCard from "../UsersCard";
import "./Results.css";



function Results(): JSX.Element {
    
    const [results, setResults]= useState<UsersModel[]>([]);
    
    useEffect(()=>{
        axios.get<UsersModel[]>(`https://randomuser.me/api/?results=10`).then(res=>{setResults(res.data)})
.catch(err=>{console.log(err);})},[]);

    return (
        <div className="Results">
			<h1>Users list:</h1>

{/* {results.map(u=><UsersCard key={`user`+u.results} user={u} />)}	 */}
{results.map(r=> <p key={`result`+r.results[]}>{r.results[]},</p>)}
        </div>
    );
}

export default Results;
