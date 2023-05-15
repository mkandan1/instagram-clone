import React, { Component } from 'react'
import Header from '../components/Header'
import Instagram from '../uploads/images/post.jpg'
import { Link } from 'react-router-dom'
import '../uploads/css/UserProfile.css'
import axios from 'axios'

export default class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            count: 0,
            bio: "",
            username: "",
        }
    }
    componentDidMount() {
        const url = window.location.pathname;
        const lastSlashIndex = url.lastIndexOf('/');
        const username = url.substring(lastSlashIndex + 1);
        this.setState({
            username: username
        })
        const data = { username: username };
        fetch("https://instagram-clone-attack.glitch.me/account", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res);
            this.setState({
                name: res.name,
                count: Object.values(res.count),
                bio: res.bio,
            })
        })
            .catch((err) => {
                console.log(err);
            })

            console.log(this.state.count);
    }
    render() {
        return (
            <>
                <Header chat={true} />
                <div className='row d-flex justify-content-center'>
                    <div className='col-11 col-md-6 pt-5 scrollable'>
                        <div className='profile__header d-flex'>
                            <div className='profile__picture'>
                                <img src={Instagram} alt="profile" className='profile__images'></img>
                            </div>
                            <div className='profile__about ms-3 ms-md-5'>
                                <div className='profile__about-header d-flex flex-wrap'>
                                    <div className='d-flex me-5 pe-4'>
                                        <h4>{this.state.username}</h4>
                                       { this.state.username == localStorage.getItem('igusername') ? <span></span>: <Link className='profil__follow-btn ms-4'>Follow</Link>}
                                    </div>

                                    <Link to='/settings'>
                                        <svg className='ms-5' aria-label="Options" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Options</title><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>

                                    </Link>
                                </div>
                                <div className='profile_states d-none d-md-block mt-3 row'>
                                    <span className='col-12 col-md-2'>0 posts</span>
                                    <span className='col-12 col-md-2'>{this.state.count[0]} followers</span>
                                    <span className='col-12 col-md-2'>{this.state.count[1]} following</span>
                                </div>
                                <div className='profile_name mt-3'>
                                    <h5>{this.state.name}</h5>
                                </div>
                                <div className='profile__bio'>
                                    <p>
                                        {
                                            this.state.bio
                                        }</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='profile_states d-flex justify-content-center text-center d-md-none mt-3 row'>
                            <span className='col-3 col-md-2'>0 <br></br>posts</span>
                            <span className='col-3 col-md-2'>{this.state.count[0]} <br></br>followers</span>
                            <span className='col-3 col-md-2'>{this.state.count[1]} <br></br>following</span>
                        </div>
                        <hr className='d-block d-md-none' />
                        <div className='post__wrapper d-flex'>
                            <div className='post_profile'>
                                <img src={Instagram} className='img-fluid post__profile-img' alt="post"></img>
                            </div>
                            <div className='post_profile'>
                                <img src={Instagram} className='img-fluid post__profile-img' alt="post"></img>
                            </div>
                            <div className='post_profile'>
                                <img src={Instagram} className='img-fluid post__profile-img' alt="post"></img>
                            </div>
                            <div className='pos_profile'>
                                <img src={Instagram} className='img-fluid post__profile-img' alt="post"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
