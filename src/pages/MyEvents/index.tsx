import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { BiPencil, BiTrashAlt } from 'react-icons/bi';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Card from '../../components/Card';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';
import Link from '../../components/Link';
import { IModalHandles } from '../../components/Modal';
import DeleteModal from '../../components/Modal/DeleteModal';
import PhotoModal from '../../components/Modal/PhotoModal';
import UpdateModal from '../../components/Modal/UpdateModal';

import {
  Container,
  CardContainer,
  ImageOverlayButton,
  CardContent,
} from './styles';

const MyEvents: React.FC = () => {
  const history = useHistory();

  const photoModalRef = useRef<IModalHandles>(null);
  const updateModalRef = useRef<IModalHandles>(null);
  const deleteModalRef = useRef<IModalHandles>(null);

  function handleNavigateToCreate() {
    history.push('/my-events/create');
  }

  const handleOpenModal = useCallback(
    (modalRef: React.RefObject<IModalHandles>) => modalRef.current?.openModal(),
    []
  );

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
              imageOverlay={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <ImageOverlayButton
                  onClick={() => handleOpenModal(photoModalRef)}
                >
                  <BiPencil size={40} />
                </ImageOverlayButton>
              }
            >
              <CardContent>
                <h1>ReactJS Conference</h1>

                <LikeDislikeButtons disableUserInteraction />

                <div>
                  <Link to={`/discover/${index}`}>Details</Link>

                  <span>
                    <Button
                      fab
                      icon={BiPencil}
                      variant="primary-ghost"
                      onClick={() => handleOpenModal(updateModalRef)}
                    />

                    <Button
                      fab
                      icon={BiTrashAlt}
                      variant="inverse-ghost"
                      onClick={() => handleOpenModal(deleteModalRef)}
                    />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContainer>
      </Container>
      <PhotoModal modalRef={photoModalRef} />
      <UpdateModal modalRef={updateModalRef} />
      <DeleteModal modalRef={deleteModalRef} />
    </>
  );
};

export default MyEvents;
