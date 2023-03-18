import axios from "axios";
import { useEffect, useState } from "react";
import { ILocation } from "../../../../../MODELS/UsersModel";
import "./Location.css";
import Street from "./Street/Street";
interface LocationProps
{location: ILocation;}

function Location(props:LocationProps ): JSX.Element {

    const [locations, setLocations]= useState<ILocation[]>([]);
    
    useEffect(()=>{
        axios.get<ILocation[]>(`https://randomuser.me/api/?results=10`).then(res=>{setLocations(res.data)})
.catch(err=>{console.log(err);})},[]);

    return (
        <div className="Location">
            {locations.map(l=><p key={`location`+l.coordinates}>{l.street?.name} {l.street?.number} </p> )}

            {/* <Street street={props.location.street?.name}> */}
			<p>{props.location.country}</p>
            <p>{props.location.state}</p>
            <p>{props.location.city}</p>
            <p>{props.location.street?.name} {props.location.street?.number}</p>
            <p>{props.location.coordinates?.latitude} {props.location.coordinates?.longitude}</p>
            <p>{props.location.postcode}</p>
            <p>{props.location.timezone?.offset} {props.location.timezone?.description}</p>

        </div>
    );
}


export default Location;
