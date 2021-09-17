import React, { Component, useState } from "react";
import M from 'materialize-css';
import {auth} from "../firebase/config"; 
import {Link,useHistory} from 'react-router-dom'

function SignUp  (){
    const history = useHistory()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

  function handleSignup ()  {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        M.toast({html: 'Invalid email',classes:'#c62828 red darken-3'})
        return
    }
 auth.createUserWithEmailAndPassword(email,password)
 .then((userCredential) => {
    
    let user = userCredential.user;
  })
  .catch((error) => {
    let errorMessage = error.message;
    M.toast({html: errorMessage,classes:'#c62828 red darken-3'})
  });
    auth.onAuthStateChanged((user)=>{
        try{
            user.updateProfile({
                displayName:name
            })
            
            M.toast({html: 'SignUp success',classes:'#4caf50 green'})
            history.push('/')
        }
        catch(error){
            //console.log(error.message);
        }
    })
    }

    return (
        <div className='mycard'>
        <div className='card authcard input-field'>
            <h2>FunShot</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           
            
            <button onClick={handleSignup} className="btn waves-effect waves-light "style={{background:"#efb6b2"}} >SignUp
    
            </button>
            <h6>
                <Link to='/signin'  style={{color:"#ff4a4a"}}> Already have an account ?</Link>
            </h6>

        </div>
    </div>
    );
  
}
const SignIn=()=>{
    const history = useHistory()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

     function handleLogin ()  {
          
          auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            
          M.toast({html: 'Sign-in Successfully',classes:'#4caf50 green'})
          history.push('/')
            
          })
          .catch((error) => {
           
            M.toast({html:'Invalid password or email' ,classes:'#c62828 red darken-3'})
            
          });
          
    }
    return (
        <div className='mycard'>
        <div className='card authcard input-field'>
            <h2>FunShot </h2>
            <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            
            <button onClick={handleLogin} className="btn waves-effect waves-light " style={{background:"#efb6b2"}}>SignIn
    
            </button>
            <h6>
                <Link to='/signup' style={{color:"#ff4a4a"}}> Don't have an account ?</Link>
            </h6>
        

        </div>
    </div>
    )
}


export {SignIn,SignUp};