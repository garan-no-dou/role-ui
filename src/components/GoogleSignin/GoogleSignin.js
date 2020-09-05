import React from 'react';
import styles from './GoogleSignin.module.css';
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBJumbotron, MDBRow} from "mdbreact";
import GoogleBtn from "../GoogleBtn/GoogleBtn";
import GoogleAuthenticationService from "./GoogleAuthenticationService";

class GoogleSignin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Signin} data-testid="Signin">
                <MDBContainer>
                    <MDBJumbotron className="m-5">
                        <MDBRow>
                            <MDBCol>
                                <form>
                                    <MDBRow>
                                        <MDBCol>
                                            <p className="h2 text-center mb-4">Role Online App</p>
                                            <p className="h5 text-center mb-4">Sign in</p>
                                            <div className="grey-text">
                                                <MDBInput label="Type your email" icon="envelope" group type="email"
                                                          validate
                                                          error="wrong"
                                                          success="right"/>
                                                <MDBInput label="Type your password" icon="lock" group type="password"
                                                          validate/>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol>
                                            <div className="text-center">
                                                <MDBBtn>Login</MDBBtn>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol>
                                            <GoogleBtn/>
                                        </MDBCol>
                                    </MDBRow>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBJumbotron>
                </MDBContainer>

            </div>
        )
    }
}


export default GoogleSignin;
