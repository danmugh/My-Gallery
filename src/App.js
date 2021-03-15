import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Auth from "./components/Auth";


function App() {
    const [selectedImg, setSelectedImg] = useState(null);
    // const [auth, SetAuth] = useState(false)
    //
    // useEffect(() => {
    //
    // }, [])

    return (
      <div className="App">
          <Auth/>
        {/*<Title />*/}
        {/*<UploadForm />*/}
        {/*<ImageGrid setSelectedImg={setSelectedImg} />*/}
        {/*{ selectedImg && (*/}
        {/*    <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />*/}
        {/* )}*/}
      </div>
  );
}

/*background: linear-gradient(180deg, rgba(54,26,66,1) 4%, rgba(148,27,199,1) 51%, rgba(255,255,255,0) 85%);*/

export default App;
