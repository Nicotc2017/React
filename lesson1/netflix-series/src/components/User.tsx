import React from 'react';
import { Container, Image } from 'react-bootstrap';

const User: React.FC = () => {
  return (
    <Container className="text-center my-5">
      <Image 
        src="https://via.placeholder.com/150" 
        roundedCircle 
        width={150} 
        height={150} 
        alt="User Avatar" 
      />
      <h2>Tamir Cohen</h2>
      <p>Email: tamirnicolascohen@gmail.com</p>
    </Container>
  );
};

export default User;