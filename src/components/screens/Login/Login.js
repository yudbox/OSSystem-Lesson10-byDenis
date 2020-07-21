import React from 'react';
import lock from '../../../image/lock.png'
import cl from './Login.module.css'
import {connect} from 'react-redux'
import {setAuthentication} from '../../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const login = () => {
        props.setAuthentication(true)
    }
    // const logout = () => {
    //     props.setAuthentication(false)
    // }

    return (
        <div className={cl.login}>
            <div className={cl.container}>
                <h2>Please click the button to Log in</h2>
            </div>
            {props.isLogged ?
                <p>You are logged in</p> :
                <p>You are not logged in</p>}
            {props.isLogged ?
            <Redirect to='/' />
            : <button onClick={login}  >Login<span className={cl.login_image}><img src={lock} alt="" /></span></button>
                }
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isLogged
    }
}
export default connect(mapStateToProps, {setAuthentication})(Login);

