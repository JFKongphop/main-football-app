import { useState, useEffect } from "react";

// login script
import { GoogleLogin, GoogleLogout } from 'react-google-login'; 
import { gapi } from "gapi-script"

// logni and send props to show at dashboard

const Login = ({setUser}) =>{

    // from api
    const clientId = "656299039491-p4l39kp8ptbhv0tibmrdn1ek709n9jma.apps.googleusercontent.com";

    const [profile, setProfile] = useState(null);

    useEffect(()=>{
        
        // this function for call client id and get  scope to load login  
        const initClient = () =>{
            gapi.client.init({
                clientId : clientId,
                scope : ''
            })
        }
        gapi.load("client:auth2", initClient)
    
    },[])

    // checking success after login
    const OnSuccess = (res) =>{
        setProfile(res.profileObj)
        console.log("success ",res.profileObj);
    }

    // checking failure after longin
    const onFailure = (response) =>{
        console.log("fail ",response);
    }

    // logout function
    const logOut = () =>{
        setProfile(null);
    }

    return (

        <section className="section">
            <div className="login-page">
                {/* <h2>React Google Login</h2> */}
                <br /><br/>
                <div className="profile-logged-in">
                    {profile ? (
                        <div className="logged-in">
                            <h3 className="show-login">User Login</h3>

                            <h3>User Login</h3>
                            <br/>
                            <br/>
                            <img className="login-img" src={profile.imageUrl} alt="image"/>
                            <p>Name : {profile.name}</p>
                            <p>Email : {profile.email}</p>
                            <br/>
                            <img className="login-img" src={profile.imageUrl} alt={profile.imageUrl}/>
                            <br/>
                            <p className="show-login">Name : {profile.name}</p>
                            <p className="show-login">Email : {profile.email}</p>
                            <br/>
                            <GoogleLogout 
                                clientId = {clientId}
                                buttonText = "Logout"
                                onLogoutSuccess={logOut}
                            />
                        </div> 
                    ) : (
                        <div className="not-login">
                            <h3>Login your account</h3>
                            <br/>
                            <br/>
                            <GoogleLogin
                                className="log"
                                clientId={clientId}
                                buttonText="Sign in wih Google"
                                onSuccess={OnSuccess}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}                                
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login
