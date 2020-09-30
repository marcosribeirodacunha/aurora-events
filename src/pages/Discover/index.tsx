import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';
import Card from '../../components/Card';

import Navbar from '../../components/Navbar';
import { Container, CardContent } from './styles';

const Discover: React.FC = () => {
  const history = useHistory();

  function handleNavigateToDetails(id: string | number) {
    history.push(`/discover/${id}`);
  }

  return (
    <>
      <Navbar />
      <Container>
        {Array.from(Array(5).keys()).map(index => (
          <Card
            image={{
              src:
                'https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-facebook.png',
              alt: 'ReactJS',
            }}
            key={index}
          >
            <CardContent>
              <h1>ReactJS Conference</h1>
              <p>
                Organized by <span>John Doe</span>
              </p>

              <LikeDislikeButtons />

              <Button block onClick={() => handleNavigateToDetails(index)}>
                Know more
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default Discover;
