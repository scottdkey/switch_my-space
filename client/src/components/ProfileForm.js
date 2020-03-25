import React from 'react'
import axios from 'axios'
import {Form} from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider';
import { Redirect } from "react-router-dom";
class ProfileForm extends React.Component {
  state = {
            name: this.props.auth.user.name,
            nickname: this.props.auth.user.nickname,
            email: this.props.auth.user.email,
            image: this.props.auth.user.image,
            redirect: null 
            }

  handleChange = e => {
    const {target: {name, value}} = e;
      this.setState({
        [name]: value 
      })
    ;
  }

  handleSubmit = (e) => {
    console.log(this.props)
    const userID = this.props.auth.user.id
    const user = { ...this.state };
    console.log(user)
    axios
      .put(`/api/users/${userID}`, user)
      .then(res => {
        this.setState({ redirect: "/profile" });
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  render(){
// users:
// id: 
// provider: 
// uid: 
// name: 
// nickname: 
// image: 
// email: 
    const { name, nickname, image, email } = this.state
    
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group width='equal'>
          <Form.Input
            label="Name"
            placeholder="Fill in Name"
            name="name"
            value={name}
            onChange={this.handleChange} />
          <Form.Input
            label="Nickname"
            placeholder="Fill in Nickname"
            name="nickname"
            value={nickname}
            onChange={this.handleChange} />
            <Form.Input
            label="Image Url"
            placeholder="Fill in Url"
            name="image"
            value={image}
            onChange={this.handleChange} />
            <Form.Input
            label="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange} />
        </Form.Group>

        
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    
    )
  }
}



export default class ConnectedProfileForm extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <ProfileForm {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}