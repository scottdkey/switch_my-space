import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

import { AuthConsumer, } from "../providers/AuthProvider";
import ProfileForm from '../components/ProfileForm' 

class ProfilePage extends React.Component{
 
state = {
  users: this.props.auth.user,
  formView: false
 };

toggleFormView = () => (
  this.setState( {
    formView: !this.state.formView} )
)

viewForm = () => (
  this.state.formView ? 
  <ProfileForm/> : ''

)
// users:
// id: 
// provider: 
// uid: 
// name: 
// nickname: 
// image: 
// email: 
 showImage = () => {
   const {image} = this.state.users
   return ( image ? <Image src={`${image}`}wrapped ui={false} /> : '' )
 }

  render(){
    console.log(this.state)
    const {email, name, nickname, image, id} = this.state.users
 
  return(
  
    <>
    
     <Card>
    {this.showImage()}
    <Card.Content>
      <Card.Header> Nickname: {nickname} </Card.Header>
      <Card.Meta>Email: {email}</Card.Meta>
      <Card.Description>
       This section is under construction.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
      <br />
      <span>Name: {name} </span>
      <br />
    </Card.Content>
  </Card>

  <Button 
      color="blue"
      onClick={this.toggleFormView}>
        Edit Profile
    </Button>

    {this.viewForm()}
  

    <Button 
      color="blue"
      onClick={this.toggleFormView}>
        Back
    </Button>
    </>
  )}
  }

  export default class ConnectedProfilePage extends React.Component {
    render() {
      return (
        <AuthConsumer>
          {auth => <ProfilePage {...this.props} auth={auth} />}
        </AuthConsumer>
      )
    }
  }
  

