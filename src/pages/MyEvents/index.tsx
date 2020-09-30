import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';
import Link from '../../components/Link';

import Navbar from '../../components/Navbar';
import { Container, CardContainer, CardContent } from './styles';

const MyEvents: React.FC = () => {
  const history = useHistory();

  function handleNavigateToCreate() {
    history.push('/my-events/create');
  }

  return (
    <>
      <Navbar />
      <Container>
        <Button onClick={handleNavigateToCreate}>New event</Button>
        <CardContainer>
          {Array.from(Array(3).keys()).map(index => (
            <Card
              key={index}
              image={{
                src:
                  'https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-facebook.png',
                alt: 'ReactJS',
              }}
            >
              <CardContent>
                <h1>ReactJS Conference</h1>

                <LikeDislikeButtons />

                <div>
                  <Link to={`/discover/${index}`}>Details</Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default MyEvents;
