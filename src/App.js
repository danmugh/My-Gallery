import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";


function App() {
    const [user, setUser] = useState('');
    const [selectedImg, setSelectedImg] = useState(null);
    const [toggleForm, setToggleForm] =  useState(true);

    const formMode = () => {
        setToggleForm(!toggleForm);
    }

    const userState = () => {
        const data = localStorage.getItem('user');
        const _user = data !== null ? JSON.parse(data) : null;
        setUser(_user);
    }

    useEffect(() => {
        userState();
    }, []);

    return (
        <>

            {user !== null ? (
                <>
                    <NavBar setUserState={() => setUser(null)}/>
                    <div className="App">
                        <Title />
                        <UploadForm />
                        <ImageGrid setSelectedImg={setSelectedImg} />
                        { selectedImg && (
                            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                        )}
                    </div>
                </>
            ) : (
                <>
                    {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>)
                        : ( <SignUp toggle={() => formMode()}/>)}

                </>
            )}

        </>

  );
}

export default App;
