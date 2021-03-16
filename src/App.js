import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import Auth from "./components/Auth";
import NavBar from "./components/NavBar";


function App() {
    const [selectedImg, setSelectedImg] = useState(null);
    // const [auth, SetAuth] = useState(false)
    //
    // useEffect(() => {
    //
    // }, [])

    return (
        <div>
            {/*<NavBar />*/}
            <Auth/>
            {/*<div className="App">*/}
            {/*    <Title />*/}
            {/*    <UploadForm />*/}
            {/*    <ImageGrid setSelectedImg={setSelectedImg} />*/}
            {/*    { selectedImg && (*/}
            {/*        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>

  );
}

export default App;
