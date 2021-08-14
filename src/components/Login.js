import React from 'react'
import "./Login.css"
// import { useState } from 'react'
import BillService from '../BillService'
// import { Redirect } from 'react-router'

//just start over, but use the props.userid in app.js as a conditional route
//right now i can't erase state without infinite loop


var username = ""
var password = ""
var userpassword = ""
var message = ""
var userid = 0

const Login = (props) => {






    const handleChange = (e) => {
        username = e.target.value
        console.log(username)
        BillService.getUserVotes("users",username)
            .then((response) => {
                userpassword = response.data[0].user_password
                userid = response.data[0].id
                console.log(username)
                console.log(userpassword)
            })


    }

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(password === userpassword)
        if (password === userpassword) {
            localStorage.setItem('userID', userid + "," + username + "," + password + "," + userpassword)

            props.setUserID({ 'userid': userid, 'username': username, 'password': password, "userpassword": userpassword })
            console.log(localStorage.getItem("userID").split(","))
        }
        else {
            message = "incorrect password"
        }
console.log(username ,password)
    }





    return (
        <div id="container">
            <div id='formContainer'>

                <form id="form" onSubmit={handleChange}>
                    <h2>Login</h2>
                    {/* <label to="username">Username</label> */}
                    <input type="text" id="username" placeholder="username" onBlur={handleChange}></input>
                    {/* <label to="password">Password</label> */}
                    <input type="password" id="password" placeholder="password" onInput={(e) => password = e.target.value}></input>

                    <div id="message">{message}</div>
                    <button type='submit' onClick={handleSubmit}>Login</button>
                </form>
            </div>


        </div >
    )

}
export default Login