import React from 'react';
import {auth} from '../firebase/config'
import {useHistory} from 'react-router-dom'
const Title = () => {
const history = useHistory();
  const handleSignout=()=>{
    auth.signOut().then(() => {
      // Sign-out successful.
  history.push('/signin')
    }).catch((error) => {
      // An error happened.
    });
  }
 
  return (
    <>
    <div className="title">
      <h1>FunShot</h1>
      <button onClick={handleSignout}  className="btn waves-effect waves-light "  style={{background:"#ff4a4a",float:"right"}}>SignOut</button>
      <h2>Your Pictures</h2>
      <p>Add amazing pictures of you fun. </p>
    </div>
    
    </>
  )
}

export default Title;