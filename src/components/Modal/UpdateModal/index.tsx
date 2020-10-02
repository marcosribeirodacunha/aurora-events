import React from 'react';

import Modal, { IModalHandles } from '..';
import Button from '../../Button';
import Input from '../../Input';
import Textarea from '../../Textarea';

import { Content } from './styles';

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
}

const UpdateModal: React.FC<IProps> = ({ modalRef }) => {
  return (
    <Modal ref={modalRef} maxWidth={620}>
      <Content>
        <h1>Update event info</h1>

        <label htmlFor="title">Title</label>
        <Input id="title" name="title" value="ReactJS Conference" />

        <label htmlFor="description">Description</label>
        <Textarea
          id="description"
          name="description"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <label htmlFor="location">Location</label>
        <Input
          id="location"
          name="location"
          value="Avenue Somewhere, 213, São Paulo, SP"
        />

        <Button>Update</Button>
      </Content>
    </Modal>
  );
};

export default UpdateModal;
