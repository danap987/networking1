import { ILogin } from "../../../../../MODELS/UsersModel";
import "./Login.css";

interface LogInProps
{
    logIn: ILogin;
}
function Login(props: LogInProps): JSX.Element {
    return (
        <div className="Login">
			<p> User Name: {props.logIn.username}</p>
            <p> Password: {props.logIn.password}</p>
            <p> UUID: {props.logIn.uuid}</p>
            <p> salt: {props.logIn.salt}</p>
            <p> sha256: {props.logIn.sha256}</p>
            <p> md5: {props.logIn.md5}</p>
        </div>
    );
}

export default Login;
