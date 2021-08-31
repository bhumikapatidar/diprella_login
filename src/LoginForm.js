import React from 'react';
import './LoginForm.css';
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            maskStyle: {
                left: 512,
                right: 0
            }
        }

        this.container = React.createRef()

        this.signIn = this.signIn.bind(this)
        this.signUp = this.signUp.bind(this)

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    signUp() {
        this.container.current.classList.add("right-panel-active");
    }
    signIn() {
        this.container.current.classList.remove("right-panel-active");
    }

    render() {
        return (
            <div className="container" id="container" ref={this.container}>
                <div className="form sign-up-container">
                    <form action="#">
                        <h1 className="big-heading">Create Account</h1>
                        <div className="social">
                            <a href="#" className="social"><FaFacebook /></a>
                            <a href="#" className="social"><FaGoogle /></a>
                            <a href="#" className="social"><FaLinkedin /></a>
                        </div>
                        <span>or use your email for registration:</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button onClick={this.signUp}>Sign Up</button>
                    </form>
                </div>

                <div className="form sign-in-container">
                    <form action="#">
                        <h1 className="big-heading">Sign In</h1>
                        <div className="social">
                            <a href="#" className="social"><FaFacebook /></a>
                            <a href="#" className="social"><FaGoogle /></a>
                            <a href="#" className="social"><FaLinkedin /></a>
                        </div>
                        <span>or use your email account:</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#" className="fpwd">Forgot your password?</a>
                        <button onClick={this.signIn}>Sign In</button>
                    </form>
                </div>

                <div class="overlap-container">
                    <div class="overlap-panels">
                        <div class="overlap-panel overlap-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="light-button" id="signIn" onClick={this.signIn}>Sign In</button>
                        </div>
                        <div class="overlap-panel overlap-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="light-button" id="signUp" onClick={this.signUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;