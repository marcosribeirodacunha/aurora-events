import React from 'react';

import Modal, { IModalHandles } from '..';
import api from '../../../services/api';
import Button from '../../Button';

import { Content } from './styles';

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
}

const DeleteModal: React.FC<IProps> = ({ modalRef }) => {
  const handleDelete = async () => {
    try {
      // await api.delete(`event/${event_id}`);
      const stupidTSError = modalRef.current?.closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal ref={modalRef} maxWidth={420}>
      <Content>
        <h1>Delete event</h1>
        <p>
          Are you sure you want to delete <span>Music Show</span>?
        </p>

        <div>
          <Button
            size="sm"
            variant="inverse-ghost"
            onClick={() => modalRef.current?.closeModal()}
          >
            Cancel
          </Button>
          <Button size="sm" variant="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Content>
    </Modal>
  );
};

export default DeleteModal;
