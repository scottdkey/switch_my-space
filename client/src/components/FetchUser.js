import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext, } from "../providers/AuthProvider";

const FetchUser =(props)=> {
  const auth = useContext(AuthContext)
  const [loaded, setLoaded] = useState(false)

const checkLocalToken = () => {
  const token = localStorage.getItem('access-token');
  return token;
}

useEffect( () => {
  const authenticated = auth.authenticated
  if(authenticated){
    setLoaded(true)
  } else {
    if (checkLocalToken()){
      axios.get('api/auth/validate_token')
      .then( res => {
        props.setUser(res.data.data)
        setLoaded(true)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  setLoaded(true)
})

  return (
    <>
    {loaded ? props.children : null}
    </>
  ) 

}


export default FetchUser;