import axios from 'axios';
import React,{useState} from 'react'

function FileUpload2(props) {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        alert(fileName);
        try {
            const res = await axios.post(
                "http://localhost:8080/upload",
                formData
            );
            console.log(res);
            //---------------------------------------------------------------------------//
            let bemenet={
                bevitel9:props.filmcim,
                bevitel10:props.filmev,
                bevitel11:props.filmhossz,
                bevitel12:props.filmmufaj,
                bevitel13:fileName,
                bevitel14:props.filmleiras

                
              }
              fetch('http://localhost:8080/filmfelvitel', {
                method: "POST",
                body: JSON.stringify(bemenet),
                headers: {"Content-type": "application/json; charset=UTF-8"}
                } )
                .then((response) => response.text())
                .then((szoveg) => {
          
                })
                .catch((error) =>{
                  console.error(error);
                });
          
            //---------------------------------------------------------------------------//
        } catch (ex) {
            console.log(ex);
        }
    };
    

    

        return (
                

            <div className="App">
                <input type="file" onChange={saveFile} />
                <button onClick={uploadFile}>Feltöltés</button>
            </div>
        );
}

export default FileUpload2;