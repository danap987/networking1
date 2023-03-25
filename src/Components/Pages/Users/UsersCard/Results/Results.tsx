import axios from "axios";
import { useEffect, useState } from "react";
import { IUser, UsersModel } from "../../../../../MODELS/UsersModel";
import ResultsCard from "../../ResultsCard/ResultsCard";
import UsersCard from "../UsersCard";
import "./Results.css";



function Results(): JSX.Element {

    const [results, setResults] = useState<UsersModel>();

    useEffect(() => {
        axios.get<UsersModel>(`https://randomuser.me/api/?results=10`).then(res => { setResults(res.data) })
            .catch(err => { console.log(err); })
    }, []);

    return (
        <div className="Results">
            <h1>Users list:</h1>

            {results?.results.map(r => <p key={`result` + r.id}>{r.id?.name}, {r.gender} {r.name?.first} {r.name?.last} {r.location?.country}, {r.location?.city}</p>)}
            {/* {results?.results.map(r => <ResultsCard key={`result` + r.id?.name}> result={r}</ResultsCard>)} */}

           

        </div>
    );
}

export default Results;
