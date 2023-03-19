import axios from "axios";
import { useEffect, useState } from "react";
import { ILocation, IName, UsersModel } from "../../../../MODELS/UsersModel";
import Coordinate from "./Location/Coordinate/Coordinate";
import Street from "./Location/Street/Street";
import Name from "./Name/Name";
import "./UsersCard.css";
interface UserCardProps
{
    user: UsersModel;
}
function UsersCard(props: UserCardProps): JSX.Element {


   
    return (
        <div className="UsersCard">
            {/* <p>{props.user.results}</p>  */}

        </div>
    );
}

export default UsersCard;
