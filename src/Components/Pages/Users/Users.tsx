import axios from "axios";
import { useEffect, useState } from "react";
import { ILocation, IName, IUser, UsersModel } from "../../../MODELS/UsersModel";
import "./Users.css";
import Name from "./UsersCard/Name/Name";
import UsersCard from "./UsersCard/UsersCard";


interface UsersProps{
    user: IUser
}
function Users(props:UsersProps): JSX.Element {
    const [names, setNames]= useState<IName[]>([]);
    
    useEffect(()=>{
        axios.get<IName[]>(`https://randomuser.me/api/?results=10`).then(res=>{setNames(res.data)})
.catch(err=>{console.log(err);})},[]);

const [locations, setLocations]= useState<ILocation[]>([]);
    
    useEffect(()=>{
        axios.get<ILocation[]>(`https://randomuser.me/api/?results=10`).then(res=>{setLocations(res.data)})
.catch(err=>{console.log(err);})},[]);




    return (
        <div className="Users">
		{names.map(n=><Name key={`name`+n.last+ n.last} name={n} />)}	
           {/* {locations.map(l=>< Location key={`location`+l.coordinates?.latitude+ l.coordinates?.longitude} location={l} />)}  }
           {locations.map(n=><Location key={`location`+n.timezone+ n.country+ n.state+ n.city+ n.street?.name+ n.street?.number} location={n} />)}	 */}
	 
			<p>Gender: {props.user.gender}</p>
            <p> Name: {props.user.name?.title }{props.user.name?.first} {props.user.name?.last}</p>
            <p>Location: {props.user.location?.state}  {props.user.location?.country}  {props.user.location?.city}
            {props.user.location?.street?.name} {props.user.location?.street?.number}</p>
            <p>Coordanite: {props.user.location?.coordinates?.latitude}  {props.user.location?.coordinates?.longitude}  </p>
           <p>postcode: {props.user.location?.postcode} Timezone:
            {props.user.location?.timezone?.description} {props.user.location?.timezone?.offset}</p>
            <p>Email: {props.user.email}</p>
            <p>Login: uuid {props.user.login?.uuid},  username:{props.user.login?.username},Password: {props.user.login?.password}</p>
             <p>Phone: {props.user.phone}</p>
            <p>Cell: {props.user.cell}</p>
            <p>ID: {props.user.id?.name} {props.user.id?.value}</p>
           <img src={props.user.picture?.medium} alt={props.user.picture?.thumbnail}/>
            </div>
    );
}

export default Users;
