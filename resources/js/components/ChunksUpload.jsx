import { useState } from 'react';
import ApiService from '../services/ApiService';

const ChunksUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const chunckSize = 2 * 1024 * 1024;
    const chunks = Math.ceil(file.size / chunckSize);

    for(let i = 0; i < chunks; i++) {
      const start = i * chunckSize;
      const end = Math.min(start + chunckSize, file.size);
      const chunk = file.slice(start, end);

      const formData = new FormData();
      formData.append('chunk', chunk);
      formData.append('chunkNumber', i + 1);
      formData.append('totalChunks', chunks);
      formData.append('filename', file.name);

      await ApiService.post('upload', formData);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  )
}

export default ChunksUpload;
