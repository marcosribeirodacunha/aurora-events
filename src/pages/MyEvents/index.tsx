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
import UpdateModal, {
  IFormData as IUpdatedFields,
} from '../../components/Modal/UpdateModal';

import {
  Container,
  CardContainer,
  NoDataMessage,
  ImageOverlayButton,
  CardContent,
} from './styles';

const MyEvents: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState(-1);

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
  }, [user?.id]);

  function handleNavigateToCreate() {
    history.push('/myevents/create');
  }

  const handleOpenModal = useCallback(
    (modalRef: React.RefObject<IModalHandles>, eventIndex: number) => {
      setSelectedEvent(eventIndex);
      return modalRef.current?.openModal();
    },
    []
  );

  const onDeleteSuccess = (deletedEvent: string) => {
    const filteredEvents = events.filter(event => event.id !== deletedEvent);
    setEvents(filteredEvents);
  };

  const onPhotoUpdateSucess = (eventId: string, newPhotoURL: string) => {
    const updatedEvents = events.map(event =>
      event.id !== eventId ? event : { ...event, photo: newPhotoURL }
    );

    setEvents(updatedEvents);
  };

  const onUpdateSuccess = (
    updatedEvent: string,
    updatedFields: IUpdatedFields
  ) => {
    const updatedEvents = events.map(event =>
      event.id !== updatedEvent ? event : { ...event, ...updatedFields }
    );
    setEvents(updatedEvents);
  };

  if (!events) return <h1>loading...</h1>;

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
            {events.map((event, index) => (
              <Card
                key={event.id}
                image={{
                  src: event.photo,
                  alt: event.title,
                }}
                imageOverlay={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <ImageOverlayButton
                    onClick={() => handleOpenModal(photoModalRef, index)}
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
                        onClick={() => handleOpenModal(updateModalRef, index)}
                      />

                      <Button
                        fab
                        icon={BiTrashAlt}
                        variant="inverse-ghost"
                        onClick={() => handleOpenModal(deleteModalRef, index)}
                      />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContainer>
        )}
      </Container>
      {events && (
        <>
          <PhotoModal
            modalRef={photoModalRef}
            event={events[selectedEvent]}
            onPhotoUpdateSucess={onPhotoUpdateSucess}
          />
          <UpdateModal
            modalRef={updateModalRef}
            event={events[selectedEvent]}
            onUpdateSuccess={onUpdateSuccess}
          />
          <DeleteModal
            modalRef={deleteModalRef}
            event={events[selectedEvent]}
            onDeleteSuccess={onDeleteSuccess}
          />
        </>
      )}
    </>
  );
};

export default MyEvents;
