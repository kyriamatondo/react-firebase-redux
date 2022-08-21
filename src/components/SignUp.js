import React, { useRef, useState } from "react";
import {auth} from "../utils/firebase.config"

const SignUp = () => {
  //useRef methode qui recupere ce qui est tapé dans l'input
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault(e);

    try{
        auth.createUserWithEmailAndPassword(registerEmail.current.value, registerPassword.current.value)
        .then(async (userAuth)=>{
            await userAuth.user.updateProfile({
                displayName
            })
            console.log(userAuth);
        });
    }catch(error){
        console.log(error);
    }

  }

  return (
    <div className="signup-container">
      <div className="signup">
        <h3 style={{ color: "white" }}>S'inscrire</h3>
        <form onSubmit={e => handleRegister(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pseudo"
              required onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
              ref={registerEmail}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              required
              ref={registerPassword}/>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
