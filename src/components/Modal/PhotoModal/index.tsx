import React from 'react';

import Modal, { IModalHandles } from '../../../components/Modal';
import Button from '../../../components/Button';
import Dropzone from '../../../components/Dropzone';

import { Content } from './styles';

interface IProps {
  modalRef: React.RefObject<IModalHandles>;
}

const PhotoModal: React.FC<IProps> = ({ modalRef }) => {
  return (
    <Modal ref={modalRef} maxWidth={620}>
      <Content>
        <h1>Select the new photo</h1>

        <label htmlFor="photo">Photo</label>
        <Dropzone
          id="photo"
          name="photo"
          onFileUploaded={() => console.log('File Uploaded')}
        />

        <Button>Update</Button>
      </Content>
    </Modal>
  );
};

export default PhotoModal;
