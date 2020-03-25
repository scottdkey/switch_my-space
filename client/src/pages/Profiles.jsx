import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Profiles extends React.Component {
  state = { profiles: [], };
  
  componentDidMount() {
    axios.get('/api/profiles')
      .then(res => this.setState({ profiles: res.data, }))
  }

  // sample = () => {
  //   const { profiles, } = this.state;

  //   if (profiles.length){
  //     const index = Math.floor(Math.random() * profiles.length);
  //     return profiles[index];
  //   }else {
  //     return null;
  //   }
  // }

  downVote = (id) => {
    const { profiles } = this.state
    this.setState({ profiles: profiles.filter ( p=> p.id !== id), })
  }

  upVote = (id) => {
    const {profiles} = this.state
    axios.put(`api/profiles/${id}`).then( res => {
      const newProfiles = profiles.filter( profile => profile.id!== id)
      this.setState({profiles: newProfiles} )
    })
  }
  render() {

    const profiles = this.state.profiles
   
      return (
        <>
        <br />
        <Header as='h1'>Discover Friends</Header>
        <br />
        <Link to="/my_profiles">
            <Button color="blue">
              View My Friends
            </Button>
          </Link>
          <br />
          <br />
        {profiles.map( profile => 
        <div>
        
          <Card key={`profile-${profile.id}`}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Card.Header>
                { profile.name }
              </Card.Header>
              <Card.Description>
                 This is a place for descriptions
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic
              onClick = {()=> this.downVote(profile.id)}>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic onClick = {()=> this.upVote(profile.id)}>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          
        </div>
      )}
      </>
      )
    } 
  }


export default Profiles;
