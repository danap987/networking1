import axios from "axios";
import { useEffect, useState } from "react";
import { CatModel } from "../../../MODELS/CatModel";
import "./Cat.css";
import CatCard from "./CatCard/CatCard";

function Cat(): JSX.Element {
    const [cats, setCats]= useState<CatModel[]>([]);
    
    useEffect(()=>{
        axios.get<CatModel[]>(`https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json`).then(res=>{setCats(res.data)})
.catch(err=>{console.log(err);})},[]);


    return (
        <div className="Cat">
			<h1>Cats list:</h1>	
            <hr/>
            {/* {cats.map(c=> <p key={`cat`+c.id}>{c.id},{c.name},{c.color},{c.birthday},{c.weight} ,{c.image}</p>)} */}
{cats.map(c=><CatCard key={`cat`+c.id} cat={c} />)}

        </div>
    );
}

export default Cat;
