import React from 'react';
import { BiMap } from 'react-icons/bi';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';
import Navbar from '../../components/Navbar';

import { Container, Organizer } from './styles';

const MyEvents: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <img
          src="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-facebook.png"
          alt="ReactJS Banner"
        />

        <section>
          <h1>ReactJS Conference</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            laudantium ipsum molestias voluptatum excepturi nemo quam dolor
            magni corrupti sed.
          </p>

          <div>
            <BiMap size={20} />
            <p>Avenue Somewhere, 213, São Paulo, SP</p>
          </div>

          <LikeDislikeButtons />

          <Organizer>
            <img
              src="https://github.com/marcosribeirodacunha.png"
              alt="Marcos Ribeiro"
            />

            <div>
              <p>
                Organized by <span>John Doe</span>
              </p>
              <small>16/12/2020 - 12:30h</small>
            </div>
          </Organizer>
        </section>
      </Container>
    </>
  );
};

export default MyEvents;
