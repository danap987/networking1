import { IRegistered } from "../../../../../MODELS/UsersModel";
import "./Register.css";

interface RegisterProps 
{
register: IRegistered;
}

function Register(props: RegisterProps): JSX.Element {
    return (
        <div className="Register">
			<p> Age:{props.register.age}</p>
            <p>Date :{props.register.date}</p>
        </div>
    );
}

export default Register;
