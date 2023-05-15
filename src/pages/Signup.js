import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Instagram from '../uploads/images/instagram logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../uploads/css/signup.css';
import { child, get, set, getDatabase, ref } from 'firebase/database'
import config from '../components/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default class Signup extends Component {
    componentDidMount() {
        document.title = "Sign Up • Instagram"
    }
    render() {

        function createAnAccount() {

            var email = document.getElementById('email').value;
            var name = document.getElementById('name').value;
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            const db = getDatabase(config);
            const dbRef = ref(db);

            get(child(dbRef, `Users/${username}`)).then((snapshot) => {

                let usernameval = false;
                if (snapshot.exists()) {
                    document.querySelector('.error').innerHTML = "Please enter another username"
                    usernameval = false;
                }
                else {
                    usernameval = true;
                    document.querySelector('.error').innerHTML = ""

                }

                if (email === "" || name === "" || password === "") {
                    document.querySelector('.error').innerHTML = "Please enter all fields"
                    return
                } else {
                    const auth = getAuth(config)
                    console.log(usernameval);
                    if (usernameval === true) {
                        createUserWithEmailAndPassword(auth, email, password).then((res) => {
                            const uid = res.user.uid;
    
                            const db = getDatabase(config);

                            console.log(username)

                            set(ref(db, 'Users/' + username), {
                                uid: uid,
                                name: name,
                                email: email,
                                bio: "",
                                follower: "null",
                                following: "null",
                                post: [""],
                                pic:"https://firebasestorage.googleapis.com/v0/b/instagram-cloud-attack.appspot.com/o/UserProfile%2FDefault_pfp.jpg?alt=media&token=3cd1a39d-3daf-4cea-9b92-e33d13be310e"

                            })

                            localStorage.setItem('igusername', username)
                            localStorage.setItem('iguser', uid);
    
                            window.location.href = '/'
                        }).catch((error) => {
                            const errormessage = error.message;
                            document.querySelector('.error').innerHTML = errormessage
                        })
                    }
                }
            })

            

        }
        return (
            <>
                <div className='reset__container mt-3 pt-5 row d-flex justify-content-center'>
                    <div className='reset__wrapper col-9 mb-0 col-md-5 col-lg-4 col-xl-3 align-self-center'>
                        <div className='reset__icon row mt-5 d-flex justify-content-center'>
                            <img src={Instagram} className='img-fluid col-4' alt="lock"></img>
                        </div>
                        <div className='reset__content-container'>
                            <h5>Sign up to see photos and videos from your friends.</h5>
                        </div>
                        <div className='facebook__container  d-flex justify-content-center mt-4'>
                            <Link to="https://www.facebook.com/login" className='btn btn-primary btn-text'><FontAwesomeIcon icon="fa-brands fa-facebook" className='me-2' /> Continue with Facebook</Link>
                        </div>

                        <div className='divider d-flex align-items-center justify-content-center mt-4'>
                            <span className='line me-2'></span>
                            <span>OR</span>
                            <line className='line ms-2'></line>
                        </div>
                        <form className='form-wrapper mt-3'>
                            <div className='input__group'>
                                <input type='email' id='email' className='input-class' placeholder='Email'></input>
                            </div>
                            <div className='input__group mt-2'>
                                <input type='text' autocomplete="off" id='name' className='input-class' placeholder='Full Name'></input>
                            </div>
                        </form>

                        <div>
                            <div className='input__group mt-2'>
                                <input type='text' autocomplete="off" id='username' className='input-class' placeholder='Username'></input>
                                <span className='username-error text-center'></span>
                            </div>

                            <div className='input__group mt-2'>
                                <input type='password' autocomplete="off" id='password' className='input-class' placeholder='Password'></input>
                            </div>
                            <div className='terms_container mt-4'>
                                <p>
                                    People who use our service may have uploaded your contact information to Instagram. <Link to=''>Learn More</Link>
                                </p>
                                <p>
                                    By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                                </p>
                            </div>
                            <button className='btn btn-primary mt-3 reset__btn' onClick={createAnAccount}>Sign up</button>
                            <span className='error text-center'></span>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-0'>
                    <div className='backtoLogin__container col-9 col-md-5 col-lg-4 col-xl-3 align-self-center'>
                        <Link to='/auth/login'>Back to login</Link>
                    </div>
                </div>
            </>
        )
    }
}
