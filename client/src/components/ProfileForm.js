import React from 'react'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import useFormInput from '../hooks/useFormInput'

const ProfileForm =(props) => {
  const name = useFormInput('')
  const nickname = useFormInput('')
  const email = useFormInput('')
  const image = useFormInput('')

  const clearState = () => {
    name.clear()
    nickname.clear()
    email.clear()
    image.clear()
  }


  const handleSubmit = e => {
    e.preventDefault()
    console.log(props)
    const userID = props.auth.user.id
    axios
      .put(`/api/users/${userID}`, { 
        name: name.value, 
        nickname: nickname.value,
        email: email.value,
        image: image.value
      
      })
      .then(res => {
        props.add(res.data)
        clearState();
        props.toggleForm(false)
      })
      .catch(err => {
        console.log(err.response);
      });
  };

    return (
      <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group width='equal'>
          <Form.Input
            label="Name"
            placeholder="Fill in Name"
            name="name"
            {...name}
            />
          <Form.Input
            label="Nickname"
            placeholder="Fill in Nickname"
            name="nickname"
            {...nickname}
            />
            <Form.Input
            label="Image Url"
            placeholder="Fill in Url"
            name="image"
            {...image}
            />
            <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            {...email}
            />
        </Form.Group>

        
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    
    )
  }



export default ProfileForm