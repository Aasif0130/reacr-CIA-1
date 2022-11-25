
// import React, { useState } from 'react';

// function CA1() {
//   const [userName, setUserName] = useState('');
 
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
    
// const formHandler=(event)=>{
//     event.preventDefault();
//     const obj={
//         firstName:userName,
//         password:password,
//         email:email
//         }
// console.log(obj);
// }
//   return (
    
//     <form onSubmit={formHandler} className="form">
      
//       <input type="text" name="UserName"
//         value={userName} 
//         onChange={e => setUserName(e.target.value)}
//         placeholder="UserName"
//         required
//       /><br></br>
      
// <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         placeholder="Email address"
//         type="email"
//         name="email"
//         required
//       /><br></br>
//       <input
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         placeholder="Password"
//         type="password"
//         name="password"
//         required
//       /><br></br>
//       <button type="submit">Submit</button>
//     </form>

//   );
// }
// export default CA1;
// import { useState } from "react";

// export default function App() {
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState(null);

//   function isValidEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
//   }

//   const handleChange = (event) => {
//     if (!isValidEmail(event.target.value)) {
//       setError("Invalid email");
//     } else {
//       setError("Valid");
//     }

//     setMessage(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         id="message"
//         name="message"
//         value={message}
//         onChange={handleChange}
//       />

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }
import React, {useState} from 'react'
import "./App.css"
function App() {
   const[username, setUsername] = useState('');
   const[email, setEmail] = useState('');
   const[password, setPassword] = useState('');
   
   const [uc, setUc] = useState("color0");
   const [ec, setEc] = useState("color0");
   const [pc, setPc] = useState("color0");


   const handleusername = (event) => {
    const un = event.target.value;
    if(un.trim() === ""){
          setUsername("Please fill the column")
          setUc("color1")//red
    }else if((un.match(/(?=.[a-z])/) || un.match(/(?=.[A-Z])/)) && un.length >= 8){
        setUsername("Username is valid")
        setUc("color2")//green
    }else{
        setUsername("Username is invalid")
        setUc("colorw")//violet
    }
   } 

   const handleemail = (event) => {
    const em = event.target.value;
    if(em.trim() === ""){
        setEmail("Invalid Email")
        setEc("color1")//red
    }else if(em.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
        setEmail("Email is valid")
        setEc("color2")//green
    }else{
        setEmail("??????")
        setEc("color3")//yellow
    }
   }

   const handlepassword = (event) =>{
    const pw = event.target.value;
    if(pw.trim() === ""){
        setPassword("Please fill the password")
        setPc("color1")//red
    }
    else if(pw.match(/(?=.[!@#\$%\^&\])/) && pw.match(/(?=.[0-9])/) && pw.match(/(?=.[A-Z])/) && pw.match(/(?=.*[a-z])/) && pw.length > 8){
        setPassword("Password is very Strong")
        setPc("color2")//green
    }
    else if(pw.match(/(?=.[a-z])/) && pw.match(/(?=.[A-Z])/) && pw.match(/(?=.*[0-9])/) && pw.length > 8){
        setPassword("Password is Strong")
        setPc("color4")//lightgreen
    }
    else if(pw.match(/(?=.[a-z])/) && pw.match(/(?=.[A-Z])/) && pw.length >= 8){
        setPassword("Password is Good")
        setPc("color5")//orange

    }
    else if(pw.match(/(?=.*[a-z])/) && pw.length > 8){
        setPassword("Password is weak")
        setPc("color1")//red
    }
    else if(pw.length < 8){
        setPassword("Password minimum of 8 characters");
    }
   }


  return (
    <form className='dynamic-form'>
      <h1><u><center>VALIDATION</center></u></h1>
    <fieldset>
    <div className='full'>
    <label >Enter your username</label><br/><br />
    <input type="text" id = "username" placeholder='Your Username' onChange={handleusername}></input><br/>
    <p id={uc}>{username}</p>
    <label>Enter your email</label><br/><br />
    <input type="email" id = "email" placeholder='Your Email' onChange = {handleemail}></input><br/>
    <p id={ec}>{email}</p>
    <label>Enter your Password</label><br/><br />
    <input type="password" id = "password" placeholder='Your Password' onChange ={handlepassword}></input>
    <p id={pc}>{password}</p>
    </div>
     </fieldset> 
    </form>
  
  )
}

export default App