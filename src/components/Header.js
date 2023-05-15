import React, { Component } from 'react'
import Instagram from '../uploads/images/instagram logo.png'
import '../uploads/css/header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends Component {
    render() {
        return (
            <>
                <header className='d-flex align-items-center'>
                    <div className='container d-flex justify-content-between row align-items-center'>
                        <div className='logo__wrapper col-6 row'>
                            <Link to="/"><img src={Instagram} className='img-fluid logo' alt='logo'></img></Link>
                        </div>
                        {
                            this.props.chat ? <div className='col-2 d-flex align-items-center'>
                                {/* <Link to='/inbox'>
                                    <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" />
                                </Link> */}
                                <Link to='/create' class=" ms-2 ms-md-4 material-symbols-outlined">
                                    add_circle
                                </Link>
                            </div> : <span></span>
                        }
                    </div>
                </header>
            </>
        )
    }
}
