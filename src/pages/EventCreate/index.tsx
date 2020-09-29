import React from 'react';
import Button from '../../components/Button';
import Dropzone from '../../components/Dropzone';
import Input from '../../components/Input';
import Navbar from '../../components/Navbar';
import Textarea from '../../components/Textarea';

import { Container } from './styles';

const EventCreate: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Organize a new event</h1>

        <label htmlFor="title">Title</label>
        <Input id="title" name="title" />

        <label htmlFor="description">Description</label>
        <Input id="description" name="description" />

        <label htmlFor="location">Location</label>
        <Textarea id="location" name="location" />

        <label htmlFor="photo">Photo</label>
        <Dropzone
          id="photo"
          name="photo"
          onFileUploaded={() => console.log('File Uploaded')}
        />

        <Button>Publish</Button>
      </Container>
    </>
  );
};

export default EventCreate;
