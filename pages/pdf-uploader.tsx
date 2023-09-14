// pages/pdf-uploader.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { parsePdfContent } from './pdf-parser';
import '../upload.css';

const PdfUploaderPage = () => {
  const router = useRouter();
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPath[]>([]);
  const [parsedText, setParsedText] = useState<string[]>([]); // Move useState inside the component

  const onDrop = async (acceptedFiles: FileWithPath[]) => {
    const updatedFiles = [...uploadedFiles, ...acceptedFiles];
    setUploadedFiles(updatedFiles);

    if (acceptedFiles.length > 0) {
      const parsedTextContent = await parsePdfContent(acceptedFiles[0]);
      setParsedText((prevParsedText) => [...prevParsedText, parsedTextContent]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDelete = (index: number) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
  };

  const dropzoneStyles: React.CSSProperties = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
  };

  return (
    <div className="container">
    <h1 className="heading">Please enter the file you would like to upload</h1>
    <div className="dropzone" {...getRootProps()}>
        <input className="file-input" {...getInputProps()} />
        <p className="upload-text">Drag 'n' drop some PDF files here, or click to select files</p>
    </div>
    <ul className="file-list">
        {uploadedFiles.map((file, index) => (
        <li key={index} className="file-item">
            {file.name}
            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
            {parsedText[index] && (
            <div className="parsed-text">
                <h3>Parsed Text</h3>
                <pre>{parsedText[index]}</pre>
            </div>
            )}
        </li>
        ))}
    </ul>
</div>

  );
};

export default PdfUploaderPage;
