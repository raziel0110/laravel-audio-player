import { useState } from "react";
import axios from "axios";

const UploadFile = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    setFiles([...e.target.files]);
  }

  const handleUpload = (e) => {
    console.log(files);
    e.preventDefault();

    const data = new FormData();
    files.forEach(file => {
      data.append("tracks[]", file);
    })

    axios.post('http://localhost:8000/api/tracks', data, {
      headers: {
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      // console.log(err)
    })
  }


  return (
    <div>
      <input name="tracks" type="file" multiple onChange={handleChange}/>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;
