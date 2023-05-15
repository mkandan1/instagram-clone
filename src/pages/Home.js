import React, { Component } from 'react'
import Header from '../components/Header';
import Post from '../uploads/images/post.jpg'
import Instagram from '../uploads/images/user_profile.jpg'
import '../uploads/css/home.css'
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import config from '../components/FirebaseConfig';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      url: '/user/'+localStorage.getItem('igusername'),
    }
  }

  signOutFun = ()=>{
    const auth = getAuth(config);

    signOut(auth).then(()=>{
      localStorage.removeItem('igusername');
      localStorage.removeItem('iguser');
      window.location.href = "/auth/login"
    })
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <>
        <Header chat={true}/>
        <div className='row d-flex justify-content-around'>
          <div className='col-1 d-none d-md-block'></div>
          <div className='col-12 col-md-4 scrollable'>
            <div className='post__wrapper mt-4'>
              <div className='post__header d-flex align-items-center justify-content-between'>
                <div className='author__profile d-flex'>
                  <img src={Instagram} className='img-fluid friend__profile-home' alt='profile'></img>
                  <div className='author__profile-details'>
                    <div className='author__profile-visit'>
                      <Link to={this.state.url} className='ms-2 me-2'>Mani Kandan</Link>
                      <span>•</span>
                      <p className='ms-2'>1h</p>
                    </div>
                    <p className='ms-2'>Tamil Nadu</p>
                  </div>
                </div>
                <div className='share'>
                  <span class="material-symbols-outlined">
                    more_horiz
                  </span>
                </div>
              </div>
              <div className='post__body mt-2'>
                <img src={Post} alt='post' className='img-fluid post__img'></img>
              </div>
              <div className='post__footer'>
                <div className='post__reaction d-flex align-items-center'>
                  <span class="material-symbols-outlined">
                    favorite
                  </span>
                  <span className='likes'>1 Like</span>
                </div>
                <div className='post__comments'>
                  <p>__mani._ </p>
                  <p>Have a great day!</p>
                </div>  
                <div className='post__comment'>
                  <input type='text' className='comment' id='comment' placeholder='Add a comment...'></input>
                </div>
              </div>
              <hr></hr>
            </div>
            <div className='post__wrapper mt-4'>
              <div className='post__header d-flex align-items-center justify-content-between'>
                <div className='author__profile d-flex'>
                  <img src={Instagram} className='img-fluid friend__profile-home' alt='profile'></img>
                  <div className='author__profile-details'>
                    <div className='author__profile-visit'>
                      <Link to='' className='ms-2 me-2'>Mani Kandan</Link>
                      <span>•</span>
                      <p className='ms-2'>1h</p>
                    </div>
                    <p className='ms-2'>Tamil Nadu</p>
                  </div>
                </div>
                <div className='share'>
                  <span class="material-symbols-outlined">
                    more_horiz
                  </span>
                </div>
              </div>
              <div className='post__body mt-2'>
                <img src={Post} alt='post' className='img-fluid post__img'></img>
              </div>
              <div className='post__footer'>
                <div className='post__reaction d-flex align-items-center'>
                  <span class="material-symbols-outlined">
                    favorite
                  </span>
                  <span className='likes'>1 Like</span>
                </div>
                <div className='post__comments'>
                  <p>__mani._ </p>
                  <p>Have a great day!</p>
                </div>  
                <div className='post__comment'>
                  <input type='text' className='comment' id='comment' placeholder='Add a comment...'></input>
                </div>
              </div>
              <hr></hr>
            </div>
          </div>
          <div className='d-none d-md-block col-md-3 mt-4'>
            {/* User Profile Visit Shortcut */}
            <div className='d-flex align-items-center'>
              <img src={Instagram} className='img-fluid user__profile-home' alt='profile'></img>
              <div className='user__profile-name ms-2'>
                <Link to={this.state.url}>Mani Kandan</Link>
                <span>__.manii_</span>
              </div>
              <Link className='btn logout' onClick={this.signOutFun}>Log out</Link>
            </div>

            {/* Suggested for you */}
            <div className='suggested__container mt-3'>
              <h5>Suggested for you</h5>

              <div className='list mt-3'>
                {/* Suggestion 1 */}
                <div className='friend__suggestion d-flex'>
                  <img src={Instagram} className='img-fluid friend__profile-home' alt='profile'></img>
                  <div className='friend__profile-shortcut ms-2'>
                    <Link to='/user'>rahul._</Link>
                    <span>Suggested for you</span>
                  </div>
                </div>
                {/* Suggestion 2 */}
                <div className='friend__suggestion d-flex mt-3'>
                  <img src={Instagram} className='img-fluid friend__profile-home' alt='profile'></img>
                  <div className='friend__profile-shortcut ms-2'>
                    <Link to='/user'>rahul._</Link>
                    <span>Suggested for you</span>
                  </div>
                </div>

                {/* Suggestion 3 */}
                <div className='friend__suggestion d-flex mt-3'>
                  <img src={Instagram} className='img-fluid friend__profile-home' alt='profile'></img>
                  <div className='friend__profile-shortcut ms-2'>
                    <Link to='/user'>rahul._</Link>
                    <span>Suggested for you</span>
                  </div>
                </div>

                {/* Suggestion 4 */}
                <div className='friend__suggestion d-flex mt-3'>
                  <img src={Instagram} className='img-fluid friend__profile-home' alt='profile'></img>
                  <div className='friend__profile-shortcut ms-2'>
                    <Link to='/user'>rahul._</Link>
                    <span>Suggested for you</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer */}
            <div className='home__footer mt-3'>
              <Link to="">About</Link>
              <Link to="">Help</Link>
              <Link to="">Press</Link>
              <Link to="">API</Link>
              <Link to="">Jobs</Link>
              <Link to="">Locations</Link>
              <Link to="">Language</Link>
              <Link to="">Terms</Link>
              <Link to="">Privacy</Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
