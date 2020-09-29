import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BiUpload } from 'react-icons/bi';

import { Container } from './styles';

interface IProps {
  onFileUploaded: (file: File) => void;
  id?: string;
  name?: string;
}

const Dropzone: React.FC<IProps> = ({ onFileUploaded, id, name }) => {
  const [selectedFileURL, setSelectedFileURL] = useState('');

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      const fileURL = URL.createObjectURL(file);

      setSelectedFileURL(fileURL);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <Container {...getRootProps()}>
      <input
        {...getInputProps({
          name,
          id,
        })}
        accept="image/*"
      />

      {selectedFileURL ? (
        <img src={selectedFileURL} alt="Event" />
      ) : isDragActive ? (
        <p>
          <BiUpload size={40} />
          Drop the image here...
        </p>
      ) : (
        <p>
          <BiUpload size={40} />
          Drag and drop the image here, or click to select a image
        </p>
      )}
    </Container>
  );
};

export default Dropzone;
