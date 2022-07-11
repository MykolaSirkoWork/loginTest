import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {login} from "../../features/userSlice";
import classes from "./login.module.css";


const userCredentials = {
    userName: 'test',
    password: '12345'
}
const Login = () => {
     const handleSubmit = (e) =>{
        e.preventDefault()

        if(userName === userCredentials.userName && password === userCredentials.password) {
            dispatch(login({
                userName: userName,
                password: password,
                loggenIn: true
            }))
        }
        else{
            setUserName('')
            setPassword('')
            setIsValidCreds(true);

        }
    }
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isValidCreds, setIsValidCreds] = useState(false);

    const dispatch = useDispatch()


    return(
        <div className={classes.container}>
            <form data-testid="form" className={classes.form} onSubmit={(e) => handleSubmit(e)}>
                <h1 className={classes.title}>
                    Sign in
                </h1>
                <input aria-label="userName"  className={classes.input} type='text' placeholder='User' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input className={classes.input} type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                {isValidCreds ? <p className={classes.alert}>Wrong Password or User name please try again</p> : null}
                <button className={classes.btn} type={'submit'}>Log in</button>
            </form>
        </div>
    )
}
export  default Login
