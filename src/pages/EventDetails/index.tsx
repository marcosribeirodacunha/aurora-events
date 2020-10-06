import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiMap, BiPencil, BiTrashAlt } from 'react-icons/bi';

import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import IEvent from '../../interfaces/event';

import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';
import { IModalHandles } from '../../components/Modal';
import DeleteModal from '../../components/Modal/DeleteModal';
import PhotoModal from '../../components/Modal/PhotoModal';
import UpdateModal from '../../components/Modal/UpdateModal';

import { Container, Photo, OrganizerButtons, Organizer } from './styles';

interface IParams {
  id: string;
}

type TEvent = IEvent & { organizer_avatar: string };

const MyEvents: React.FC = () => {
  const [event, setEvent] = useState<TEvent>({} as TEvent);

  const params = useParams() as IParams;
  const { signed, user } = useAuth();

  const photoModalRef = useRef<IModalHandles>(null);
  const updateModalRef = useRef<IModalHandles>(null);
  const deleteModalRef = useRef<IModalHandles>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const { data } = await api.get<TEvent>(`events/${params.id}`);
        setEvent(data);
      } catch (error) {
        if (error.response && error.response.data.status)
          console.log(error.response.data);
        else console.log(error);
      }
    }

    loadData();
  }, [params.id]);

  const handleOpenModal = useCallback(
    (modalRef: React.RefObject<IModalHandles>) => modalRef.current?.openModal(),
    []
  );

  if (Object.entries(event).length === 0) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar />
      <Container>
        <Photo>
          <img src={event.photo} alt={event.title} />

          {user?.id === event.organizer_id && (
            <button
              type="button"
              onClick={() => handleOpenModal(photoModalRef)}
            >
              <BiPencil size={56} />
            </button>
          )}
        </Photo>

        <section>
          {user?.id === event.organizer_id && (
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
          )}

          <h1>{event.title}</h1>

          <p>{event.description}</p>

          <div className="location">
            <BiMap size={20} />
            <p>{event.location}</p>
          </div>

          <LikeDislikeButtons
            data={{
              event_id: event.id,
              likes: event.likes,
              dislikes: event.dislikes,
            }}
            disableUserInteraction={!signed || user?.id === event.organizer_id}
          />

          <Organizer>
            <img src={event.organizer_avatar} alt="User avatar" />

            <div>
              <p>
                Organized by <span>{event.organizer_name}</span>
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
