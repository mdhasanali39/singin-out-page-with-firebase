import { useState } from 'react';
import './App.css'
import { app } from './Firebase/firebase.config'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

function App() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [users, setUsers] = useState(null);


 

  const handleSignInButtonClick = () =>{
      signInWithPopup(auth, googleProvider)
      .then(result =>{
        console.log(result);
        setUsers(result);
      })
      .catch(error =>{
        console.log(error);
      })
  }


  return (
    <>
      <div>
        <button onClick={handleSignInButtonClick}>Sign In with Google</button>
        { 
         users && <div>
          <h2>userName:{users.user.displayName}</h2>
        </div>}
      </div>
    </>
  )
}

export default App
