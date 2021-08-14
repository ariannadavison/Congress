import React from 'react'
import "./Login.css"
import { useState } from 'react'
import BillService from '../BillService'

const CreateUser = () => {
    // const [login, setlogin] = useState("")
    // const username = "useraccess"
    // const password = "howdy"

    // var [usernameVal, setUsernameVal] = useState("")
    // var [passwordVal, setPasswordVal] = useState("")
    var [message, setMessage] = useState("")

    var usernameVal = ""
    var passwordVal = ""
    // function checkPassword(e) {
    //     setPasswordVal(e.target.value)
    // }
    // function checkUsername(e) {
    //     setPasswordVal(e.target.value)
    // }
    // function checkLogin(e) {
    //     e.preventDefault()
    //     if (password === passwordVal && username === usernameVal) {
    //         setMessage(<Success />)
    //     }
    //     else {
    //         setMessage(<TryAgain />)
    //     }
    // }
    return (
        <div id="container">
            <form id="form" >
                <h2>sign up</h2>
                {/* <label to="username">Username</label> */}
                <input type="text" id="username" placeholder="username" onChange={(e) => { usernameVal = e.target.value; console.log(usernameVal) }}></input>
                {/* <label to="password">Password</label> */}
                <input type="password" id="password" placeholder="password" onChange={(e) => passwordVal = e.target.value}></input>
                <button type="submit" onClick={() => { BillService.submitVote(usernameVal, passwordVal, "users"); console.log(usernameVal) }}>Login</button>

                <div id="message">{message}</div>
            </form>

            <div id="signup">
                <div id="block">
                    <div>Don't Have An Account?</div>

                    <a>Click Here to Sign Up</a>
                </div>
            </div>
        </div>
    )
}
export default CreateUser