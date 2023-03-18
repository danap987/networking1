import axios from "axios";
import { useEffect, useState } from "react";
import { UsersModel } from "../../../MODELS/UsersModel";
import "./Users.css";
import UsersCard from "./UsersCard/UsersCard";

function Users(): JSX.Element {

    const [users, setUsers]= useState<UsersModel[]>([]);
    
    useEffect(()=>{
        axios.get<UsersModel[]>(`https://randomuser.me/api/?results=10`).then(res=>{setUsers(res.data)})
.catch(err=>{console.log(err);})},[]);

    return (
        <div className="Users">
		<h1>Users list:</h1>

         {users.map(u=><UsersCard key={`task`+u.id} user={u} />)}		
        </div>
    );
}

export default Users;
