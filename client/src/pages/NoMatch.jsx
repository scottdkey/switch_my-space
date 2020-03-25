import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Container} from 'semantic-ui-react';
import './NoMatch.css'
export const NoMatch = () => (
  <div className='backgroundimg'> 
      <Header as="h3" textAlign="center">
        Page not found return
        <Link to="/"> Home</Link>
      </Header>
  </div>
)

export default NoMatch;

