import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home(){

  const [body, setBody] = useState();
  useEffect(()=>{
    const baseURL = "https://api.instagram.com/oauth/authorize?client_id=773946244319476&redirect_uri=https://getit-profile-attack.vercel.app/auth/login&scope=user_profile,user_media&response_type=code";
    axios.get(baseURL).then((res)=> {
      setBody(res)
    })
  })
    return (
      <>
        <div>{body}</div>
      </>
    )
  }

