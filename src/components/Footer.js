import React, { Component } from 'react';
import '../uploads/css/footer.css'
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className=' col-12 text-center footer'>
                        <Link to=''>Meta</Link>
                        <Link to=''>About</Link>
                        <Link to=''>Blogs</Link>
                        <Link to=''>Jobs</Link>
                        <Link to=''>Help</Link>
                        <Link to=''>API</Link>
                        <Link to=''>Privacy</Link>
                        <Link to=''>Terms</Link>
                        <Link to=''>Top Accounts</Link>
                        <Link to=''>Location</Link>
                        <Link to=''>Instagram Lite</Link>
                        <Link to=''>Contact Uploading & Non-Users</Link>
                        <Link to=''>Meta Verified</Link>
                    </div>
                </div>
            </>
        )
    }
}
