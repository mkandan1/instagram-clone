import React, { Component } from 'react'
import Instagram from '../uploads/images/instagram logo.png'
import '../uploads/css/header.css'

export default class Header extends Component {
    render() {
        return (
            <>
                <header className='d-flex align-items-center'>
                    <div className='container'>
                        <div className='logo__wrapper row'>
                            <img src={Instagram} className='img-fluid logo' alt='logo'></img>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}
