import { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    // setFiles([...e.target.files]);
    setFiles(e.target.files[0]);
  }

  const handleUpload = async (e) => {
    e.preventDefault();

    const chunkSize = 2 * 1024 * 1024; // 2MB
    const chunks = Math.ceil(files.size / chunkSize);

    for (let i = 0; i < chunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, files.size);
      const chunk = files.slice(start, end);
      const extension = files.name.split(".").slice(-1)[0];

      const formData = new FormData();
      formData.append('chunk', chunk);
      formData.append('chunkNumber', i + 1);
      formData.append('totalChunks', chunks);
      formData.append('filename', files.name);
      formData.append('extension', extension)

      await axios.post('http://localhost:8000/api/tracks', formData);
    }

    // const data = new FormData();
    // files.forEach(file => {
    //   data.append("tracks[]", file);
    // })

    // axios.post('http://localhost:8000/api/tracks', data, {
    //   headers: {
    //     accept: 'application/json',
    //     'Access-Control-Allow-Origin': '*'
    //   }
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err)
    // })


  }


  return (
    <div>
      <input type="file" onChange={handleChange}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;
