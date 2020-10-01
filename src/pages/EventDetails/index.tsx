import React, { useCallback, useRef } from 'react';
import { BiMap, BiPencil, BiTrashAlt } from 'react-icons/bi';

import Navbar from '../../components/Navbar';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';
import { IModalHandles } from '../../components/Modal';
import DeleteModal from '../../components/Modal/DeleteModal';
import PhotoModal from '../../components/Modal/PhotoModal';
import UpdateModal from '../../components/Modal/UpdateModal';

import { Container, Photo, OrganizerButtons, Organizer } from './styles';
import Button from '../../components/Button';

const MyEvents: React.FC = () => {
  const photoModalRef = useRef<IModalHandles>(null);
  const updateModalRef = useRef<IModalHandles>(null);
  const deleteModalRef = useRef<IModalHandles>(null);

  const handleOpenModal = useCallback(
    (modalRef: React.RefObject<IModalHandles>) => modalRef.current?.openModal(),
    []
  );

  return (
    <>
      <Navbar />
      <Container>
        <Photo>
          <img
            src="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-facebook.png"
            alt="ReactJS Banner"
          />

          <button type="button" onClick={() => handleOpenModal(photoModalRef)}>
            <BiPencil size={56} />
          </button>
        </Photo>

        <section>
          <OrganizerButtons>
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
          </OrganizerButtons>

          <h1>ReactJS Conference</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            laudantium ipsum molestias voluptatum excepturi nemo quam dolor
            magni corrupti sed.
          </p>

          <div className="location">
            <BiMap size={20} />
            <p>Avenue Somewhere, 213, São Paulo, SP</p>
          </div>

          <LikeDislikeButtons />

          <Organizer>
            <img
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
              alt="John Doe"
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
      <PhotoModal modalRef={photoModalRef} />
      <UpdateModal modalRef={updateModalRef} />
      <DeleteModal modalRef={deleteModalRef} />
    </>
  );
};

export default MyEvents;
