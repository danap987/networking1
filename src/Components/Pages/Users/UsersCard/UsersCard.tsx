import axios from "axios";
import { useEffect, useState } from "react";
import { ILocation, IName, IUser, UsersModel } from "../../../../MODELS/UsersModel";
import Coordinate from "./Location/Coordinate/Coordinate";
import Street from "./Location/Street/Street";
import Name from "./Name/Name";
import "./UsersCard.css";
interface UserCardProps
{
    user: IUser;
}
function UsersCard(props: UserCardProps): JSX.Element {


   
    return (
        <div className="UsersCard">
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

export default UsersCard;
