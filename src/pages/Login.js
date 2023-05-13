import React, { Component } from 'react'
import Instagram from '../uploads/images/instagram logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../uploads/css/login.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default class Login extends Component {
    render() {
        return (
            <>
                <div className='row d-flex con justify-content-center d-flex'>
                    <div className='col-9 col-md-5 col-lg-4 col-xl-3 login__wrapper align-self-center'>
                        <div className='login__container pt-4 ps-1 ps-md-5 pe-1 pe-md-5 pe-2 pb-3'>
                            <div className='logo__container d-flex justify-content-center mt-3'>
                                <img src={Instagram} className='img-fluid insta-logo' alt="Instagram Logo" />
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
                                    <input type='email' id='email' className='input-class' placeholder='Phone number, username, or email'></input>
                                </div>
                                <div className='input__group mt-2'>
                                    <input type='password' autocomplete="off" id='password' className='input-class' placeholder='Password'></input>
                                </div>
                            </form>

                            <div className='d-flex justify-content-end mt-3'>
                                <Link to='/auth/password/reset' className='reset__text'>Forgot password?</Link>
                            </div>

                            <div className='login__btn mt-3 d-flex justify-content-center'>
                                <button className="btn btn-primary">Log in</button>
                            </div>

                            <div className='signup__wrapper text-center mt-3'>
                                <span>Don't have an account? <Link to='/auth/accounts/signup'>Sign up</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

            </>
        )
    }
}
