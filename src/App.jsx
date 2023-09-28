import { useState } from 'react';
import './App.css'
import { app } from './Firebase/firebase.config'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

function App() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [users, setUsers] = useState(null);

console.log(users);
 

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

  const handleSignOutButtonClick = () => {
    signOut(auth)
    .then(result =>{
      setUsers(result)
      console.log(result);
      console.log('sign out succesfull');
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <div>
       <div>
        {users ? 
          <button onClick={handleSignOutButtonClick}>Sign Out</button>
          :
        <button onClick={handleSignInButtonClick}>Sign In with Google</button>
        }
        </div>
        { 
         users && <div>
          <h2>userName:{users.user.displayName}</h2>
        </div>}
      </div>
    </>
  )
}

export default App
