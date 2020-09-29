import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';

import Navbar from '../../components/Navbar';
import { Container, CardContainer, Card, CardContent } from './styles';

const Discover: React.FC = () => {
  const history = useHistory();

  function handleNavigateToDetails(id: string | number) {
    history.push(`/discover/${id}`);
  }

  return (
    <>
      <Navbar />
      <Container>
        <CardContainer>
          {Array.from(Array(5).keys()).map(index => (
            <Card key={index}>
              <img
                src="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-facebook.png"
                alt="ReactJS"
              />

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
        </CardContainer>
      </Container>
    </>
  );
};

export default Discover;
