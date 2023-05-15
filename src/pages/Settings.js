import React, { Component } from 'react'
import Header from '../components/Header'
import '../uploads/css/settings.css'
import Profile from '../uploads/images/user_profile.jpg'
import { Link } from 'react-router-dom'
import config from '../components/FirebaseConfig'
import { child, getDatabase, ref, get } from 'firebase/database'
import upload from '../components/Upload'
import { getStorage } from 'firebase/storage'

const data = [
  { name: "Anom", age: 19, gender: "Male", pic: Profile },
  { name: "Megha", age: 19, gender: "Female", pic: Profile },
  { name: "Subham", age: 25, gender: "Male", pic: Profile },
]

export default class Settings extends Component {
  constructor(){
    super();
    this.state = {
      profileURL: null
    }
  }
  openTap = (evt, page) => {
    var i, pagecontent, tablinks;
    pagecontent = document.getElementsByClassName('pagecontent');
    for (i = 0; i < pagecontent.length; i++) {
      pagecontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', "");
    }

    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
  }



  componentDidMount() {
    document.title = 'Settings • Instagram';

    const db = getDatabase(config);
    const dbRef = ref(db);
    const username = localStorage.getItem('igusername')

    get(child(dbRef, `Users/${username}`)).then((snapshot)=>{
      if(snapshot.exists()){
        const d = snapshot.val()
        this.setState({
          profileURL: d.pic
        })
      }
    })
  }

  changeProfilePic = (event) =>{
    const storage = getStorage(config);
    const storageRef = ref(storage);
    const imagesRef = ref(storageRef, 'UserProfile')
    const input = document.getElementById('file');
    const file = input.files[0];
    const fileName = localStorage.getItem('igusername') + '.jpg';
    
    const spaceRef = ref(imagesRef, fileName);
    const path = spaceRef.fullPath;
    const name = spaceRef.name;

    upload(spaceRef, file)
  }

    render() {

      return (
        <>
          <Header chat={true} />
          <div>
            <div className='row d-flex justify-content-center mt-5'>
              <div className='col-12 col-md-4 tab d-flex justify-content-between'>
                <button className='tab-btn' onClick={(event) => this.openTap(event, 'Edit')}>Edit Profile</button>
                {/* <button className='tab-btn' onClick={(event) => this.openTap(event, 'States')}>Profile states</button> */}
                <button className='tab-btn' onClick={(event) => this.openTap(event, 'Spam')}>Spam Reports</button>
                <button className='tab-btn' onClick={(event) => this.openTap(event, 'Privacy')}>Security</button>
              </div>
              <div className='d-flex justify-content-center'>
                <hr className='mt-3' />
              </div>
              <div className='col-12 col-md-8 content'>
                <div id='Edit' className='pagecontent'>
                  <h4>Edit Profile</h4>

                  <div className='edit__wrapper mt-4'>
                    <div className='edit__profile-change d-flex'>
                      <img src={this.state.profileURL} alt='profile'></img>
                      <div className='edit__profile-btn-container'>
                        <span className='d-block ms-3'>Mani Kandan</span>
                        <input type="file" id='file' className='edit__profile-btn p-0 ms-3' onInput={(event)=> this.changeProfilePic()}></input>
                      </div>
                    </div>
                    <div className='edit__bio mt-5'>
                      <h5>Bio</h5>
                      <textarea></textarea>
                      <span className='d-block bio__error'></span>
                    </div>
                    <div className='edit__save mt-5'>
                      <Link className='edit__save-btn'>Save</Link>
                    </div>
                  </div>
                </div>
                {/* <div id='States' className='pagecontent'>
                <h4>Profile States</h4>
              </div> */}
                <div id='Spam' className='pagecontent'>
                  <h4>Spam Reports</h4>
                  <div className='spam__list'>
                    <table className='mt-5'>
                      <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Date</th>
                      </tr>
                      {data.map((val, key) => {
                        return (
                          <tr key={key}>
                            <td><img src={val.pic} alt='pic' className='img-fluid pic'></img>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </div>
                <div id='Privacy' className='pagecontent'>
                  <h4>Security</h4>

                  <div className='password__change mt-5'>
                    <h5>Password</h5>

                    <Link to='/auth/password/reset'>Change password</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  }
