import React from 'react';
import axios from 'axios';
import { Card, Divider, Image, } from 'semantic-ui-react';

class MyProfiles extends React.Component {
  state = { profile: [], };

  componentDidMount() {
    axios.get('/api/my_profiles')
      .then( res => this.setState({ profiles: res.data, }) );
  }

  render() {
    const { profile, } = this.state;
    return (
      <Card.Group itemsPerRow={4}>
        { profile.map( profile =>
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                { profile.name }
              </Card.Header>
            </Card.Content>
          </Card>
        )}
      </Card.Group>
    )
  }
}

export default MyProfiles;
