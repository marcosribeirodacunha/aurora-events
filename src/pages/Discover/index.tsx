import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import IEvent from '../../interfaces/event';

import Button from '../../components/Button';
import LikeDislikeButtons from '../../components/LikeDislikeButtons';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

import { Container, CardContent } from './styles';

const Discover: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const { signed, user } = useAuth();

  const history = useHistory();

  useEffect(() => {
    async function loadEvents() {
      try {
        const { data } = await api.get<IEvent[]>('/events');
        setEvents(data);
      } catch (error) {
        if (error.response && error.response.data.status)
          console.log(error.response.data);
        else console.log(error);
      }
    }

    loadEvents();
  }, []);

  function handleNavigateToDetails(id: string | number) {
    history.push(`/discover/${id}`);
  }

  return (
    <>
      <Navbar />
      <Container>
        {events.map(event => (
          <Card
            key={event.id}
            image={{
              src: event.photo,
              alt: event.title,
            }}
          >
            <CardContent>
              <h1>{event.title}</h1>
              <p>
                Organized by <span>{event.organizer_name}</span>
              </p>

              <LikeDislikeButtons
                data={{
                  event_id: event.id,
                  likes: event.likes,
                  dislikes: event.dislikes,
                }}
                disableUserInteraction={
                  !signed || user?.id === event.organizer_id
                }
              />

              <Button block onClick={() => handleNavigateToDetails(event.id)}>
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
