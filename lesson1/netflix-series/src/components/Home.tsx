import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <Container className="text-center my-5">
      <Image 
        src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/Best-tv-shows-Netflix-V3.png" 
        fluid 
        alt="Top Netflix Series" 
      />
    </Container>
  );
};

export default Home;