import { useState } from "react";
import "./main.css";
import Dashborad from "../images/illustration-dashboard.png";

function Main() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const handleEmailChange = (e) => {
        setError(false);
        setEmail(e.target.value);
    }

    const checkEmail = () => {
        const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email)) {
            return true;
        } else {
            setError(true);
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkEmail()) {
            alert(`${email} notified`);
        }
    }



    return (
        <main>
            <form className={error ? "errorForm" : "" } >
                <input className={error ? "errorInput" : "" } type="text" placeholder="Your email address..." value={email} onChange={handleEmailChange}></input>
                {error && (
                    <p className="error">Please provide a valid email address</p>
                )}
                <button onClick={handleSubmit}>Notify Me</button>
            </form>
            <img src={Dashborad} alt="dashboard"></img>
        </main>
    );
}

export default Main;
