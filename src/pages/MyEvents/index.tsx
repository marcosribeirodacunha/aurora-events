import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiPencil, BiTrashAlt } from 'react-icons/bi';

import api from '../../services/api';
import IEvent from '../../interfaces/event';

import useAuth from '../../hooks/useAuth';

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
  NoDataMessage,
  ImageOverlayButton,
  CardContent,
} from './styles';

const MyEvents: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  const history = useHistory();
  const { user } = useAuth();

  const photoModalRef = useRef<IModalHandles>(null);
  const updateModalRef = useRef<IModalHandles>(null);
  const deleteModalRef = useRef<IModalHandles>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get<IEvent[]>(
          `events?organizer=${user?.id}`
        );

        setEvents(data);
      } catch (error) {
        if (error.response && error.response.data.status)
          console.log(error.response.data);
        else console.log(error);
      }
    }
    loadData();
  }, []);

  function handleNavigateToCreate() {
    history.push('/myevents/create');
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
        {events.length === 0 ? (
          // eslint-disable-next-line react/no-unescaped-entities
          <NoDataMessage>You haven't organized any events yet.</NoDataMessage>
        ) : (
          <CardContainer>
            {events.map(event => (
              <Card
                key={event.id}
                image={{
                  src: event.photo,
                  alt: event.title,
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
                  <h1>{event.title}</h1>

                  <LikeDislikeButtons
                    data={{
                      event_id: event.id,
                      likes: event.likes,
                      dislikes: event.dislikes,
                    }}
                    disableUserInteraction
                  />

                  <div>
                    <Link to={`/discover/${event.id}`}>Details</Link>

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
        )}
      </Container>
      <PhotoModal modalRef={photoModalRef} />
      <UpdateModal modalRef={updateModalRef} />
      <DeleteModal modalRef={deleteModalRef} />
    </>
  );
};

export default MyEvents;
