import React, { useContext, useState } from "react";
import axios from "axios";
import { Form } from "semantic-ui-react";
import { AuthConsumer, AuthContext } from "../providers/AuthProvider";
import { Redirect } from "react-router-dom";

const ProfileForm = (props)=> {
  const auth = useContext(AuthContext)
  const {id, name, nickname, email, image} = auth.user
  const [profile, setProfile] = useState(auth.user)

  const handleChange = (e) => {
    setProfile(e.target.value)
  };

  const handleSubmit = (e) => {
    console.log(profile)
    console.log(props)
    axios
      .patch(`/api/users/${auth.user.id}`, profile)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.response);
      });
  };

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group width="equal">
            <Form.Input
              label="Name"
              placeholder="Fill in Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <Form.Input
              label="Nickname"
              placeholder="Fill in Nickname"
              name="nickname"
              value={nickname}
              onChange={handleChange}
            />
            <Form.Input
              label="Image Url"
              placeholder="Fill in Url"
              name="image"
              value={image}
              onChange={handleChange}
            />
            <Form.Input
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }

export default ProfileForm