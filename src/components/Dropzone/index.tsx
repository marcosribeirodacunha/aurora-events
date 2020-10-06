import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';
import { BiUpload } from 'react-icons/bi';

import { Container, DropzoneContainer } from './styles';

interface IProps {
  name: string;
  label?: string;
}

const Dropzone: React.FC<IProps> = ({ name, label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [selectedFileURL, setSelectedFileURL] = useState('');

  const { fieldName, registerField, error, clearError } = useField(name);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileURL = URL.createObjectURL(file);
    setSelectedFileURL(fileURL);
  }, []);

  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
    });
  }, [fieldName, registerField, inputRef]);

  const handleDropzoneFocus = useCallback(() => {
    clearError();
    setIsFocused(true);
  }, [clearError]);

  const handleDropzoneBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <DropzoneContainer
        {...getRootProps()}
        isFocused={isFocused}
        hasError={!!error}
        onFocus={handleDropzoneFocus}
        onBlur={handleDropzoneBlur}
      >
        <input
          {...getInputProps({
            name,
            id: fieldName,
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
      </DropzoneContainer>

      {error && <span>{error}</span>}
    </Container>
  );
};

export default Dropzone;
