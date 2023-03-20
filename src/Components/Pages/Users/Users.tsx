import axios from "axios";
import { useEffect, useState } from "react";
import { ILocation, IName, IUser, UsersModel } from "../../../MODELS/UsersModel";
import "./Users.css";
import Name from "./UsersCard/Name/Name";
import UsersCard from "./UsersCard/UsersCard";


// interface UsersProps{
//     user: IUser
// }
function Users(): JSX.Element {

    const [names, setNames]= useState<IName[]>([]);
    const [users, setUsers]= useState<IUser[]>([]);
    

    useEffect(()=>{
        axios.get<IName[]>(`https://randomuser.me/api/?results=10`).then(res=>{setNames(res.data)})
.catch(err=>{console.log(err);})},[]);

useEffect(()=>{
    axios.get<IUser[]>(`https://randomuser.me/api/?results=10`).then(res=>{setUsers(res.data)})
.catch(err=>{console.log(err);})},[]);

const [locations, setLocations]= useState<ILocation[]>([]);
    
    useEffect(()=>{
        axios.get<ILocation[]>(`https://randomuser.me/api/?results=10`).then(res=>{setLocations(res.data)})
.catch(err=>{console.log(err);})},[]);




    return (
        <div className="Users">
		{names.map(n=><Name key={`name`+n.last+ n.last} name={n} />)}	
        {/* {users.map(u=><Name key={`user`+ u.} user={u} />)}	 */}

           {/* {locations.map(l=>< Location key={`location`+l.coordinates?.latitude+ l.coordinates?.longitude} location={l} />)}  } */}
           {/* {locations.map(n=><Location key={`location`+n.timezone+ n.country+ n.state+ n.city+ n.street?.name+ n.street?.number} location={n} />)}	 */}
	
			
            </div>
    );
}

export default Users;
