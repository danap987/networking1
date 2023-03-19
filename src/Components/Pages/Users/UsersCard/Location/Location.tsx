import axios from "axios";
import { useEffect, useState } from "react";
import { ILocation, IStreet } from "../../../../../MODELS/UsersModel";
import "./Location.css";
import Street from "./Street/Street";
interface LocationProps
{location: ILocation;}

function Location(props:LocationProps ): JSX.Element {

    const [locations, setLocations]= useState<ILocation[]>([]);
    const [streets, setStreets]= useState<IStreet[]>([]);
    
    useEffect(()=>{
        axios.get<IStreet[]>(`https://randomuser.me/api/?results=10`).then(res=>{setStreets(res.data)})
.catch(err=>{console.log(err);})},[]);

useEffect(()=>{
    axios.get<ILocation[]>(`https://randomuser.me/api/?results=10`).then(res=>{setLocations(res.data)})
.catch(err=>{console.log(err);})},[]);

    return (
        <div className="Location">
            {/* {streets.map(s=><Street key={`location`+s.name+ s.number}> street={s} </Street> )} */}

            {/* <Street street={props.location.street?.name}> */}

            {locations.map(n=><Location key={`location`+n.timezone+ n.country+ n.state+ n.city+ n.street?.name+ n.street?.number} location={n} />)}	


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
