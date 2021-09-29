import React, { useContext, useState } from "react";
import { GlobalContext } from '../context/context'

function SignUp() {
    const [userName, setUserName] = useState('');
    const [Email, setUserEmail] = useState('');
    const [Password, setUserPassword] = useState('');
    const [Role, setUserRole] = useState('');
    const [userInfoObj, setUserInfoOBJ] = useState([]);
    const {state, dispatch} = useContext(GlobalContext);

    const sendUserData = ()=> {
        dispatch({ type: "REGISTER_USER", payload: userInfoObj})
    }
    return (
        <div>
            <label>
                Username : <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <br />
            <label>
                Email : <input type="email" value={Email} onChange={(e) => setUserEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password : <input type="password" value={Password} onChange={(e) => setUserPassword(e.target.value)} />
            </label>
            <br />
            <label>
                Role : <input type="radio" name="Role" value="tranier" onClick={(e) => setUserRole(e.target.value)} />Trainer
                <input type="radio" name="Role" value="student" onClick={(e) => setUserRole(e.target.value)} />Student
            </label>
            <br />
            <br />
            <button onClick={() => {
                if (userName == '' || Email == '' || Password == '' || Role == '') {
                    alert("All Fields Are Required To Fill")
                }
                else {
                    let cloneUserInfo = userInfoObj

                    let userInfo = {
                        userName: {userName},
                        email: {Email},
                        password: {Password},
                        role: {Role}
                    }

                    cloneUserInfo.push(userInfo)
                    setUserInfoOBJ(cloneUserInfo)
                    console.log(userInfoObj)
                    sendUserData();

                    setUserName('');
                    setUserEmail('');
                    setUserPassword('');
                    setUserRole('');
                }

            }

            }>
                Submit
            </button>
        </div>
    )
}


export default SignUp;