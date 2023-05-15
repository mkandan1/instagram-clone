import React, { Component } from 'react'
import Header from '../components/Header'
import lock from '../uploads/images/lock.png'
import { Link } from 'react-router-dom'
import '../uploads/css/reset.css'
import Footer from '../components/Footer'

export default class ForgotPassword extends Component {

    componentDidMount() {
        document.title = "Reset Password • Instagram"
    }
    render() {
        return (
            <>
                <Header />
                <div className='reset__container mt-3 pt-5 row d-flex justify-content-center'>
                    <div className='reset__wrapper col-9 mb-0 col-md-5 col-lg-4 col-xl-3 align-self-center'>
                        <div className='reset__icon row mt-5 d-flex justify-content-center'>
                            <img src={lock} className='img-fluid col-4' alt="lock"></img>
                        </div>
                        <div className='reset__content-container'>
                            <h5>Trouble logging in?</h5>
                            <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
                        </div>
                        <div>
                            <div className='input__group mt-2'>
                                <input type='text' autocomplete="off" id='password' className='input-class' placeholder='Email, or Username'></input>
                            </div>
                            <button className='btn btn-primary mt-3 reset__btn'>Send login link</button>
                        </div>
                        <div className='divider d-flex align-items-center justify-content-center mt-4'>
                            <span className='line me-2'></span>
                            <span>OR</span>
                            <line className='line ms-2'></line>
                        </div>
                        <div className='create__container'>
                            <Link to='/auth/accounts/signup'>Create new account</Link>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center mt-0'>
                <div className='backtoLogin__container col-9 col-md-5 col-lg-4 col-xl-3 align-self-center'>
                        <Link to='/auth/login'>Back to login</Link>
                    </div>
                </div>
            <Footer />
            </>
        )
    }
}
