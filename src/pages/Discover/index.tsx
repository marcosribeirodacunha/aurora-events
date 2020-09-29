import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import Button from '../../components/Button';

import Navbar from '../../components/Navbar';
import {
  Container,
  CardContainer,
  Card,
  CardContent,
  LikeButton,
} from './styles';

const Discover: React.FC = () => {
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
                <h1>ReactJS Confehence</h1>
                <p>
                  Organized by <span>John Doe</span>
                </p>

                <LikeButton className="active">
                  <BiLike size={20} />
                  22
                </LikeButton>

                <LikeButton>
                  <BiDislike size={20} />0
                </LikeButton>

                <Button block>Know more</Button>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export default Discover;
