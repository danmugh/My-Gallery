import React, { useState, useEffect } from 'react';
import './ImageGrid.css';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import Spinner from "./Spinner";

// import firebase from 'firebase';
// import 'firebase/firestore';


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    // const [images, setImages] = useState();
    // const userId = localStorage.getItem('userId');
    //
    // useEffect(() => {
    //     return firebase.firestore()
    //         .collection("images")
    //         .orderBy("createdAt", "desc")
    //         .onSnapshot(images => setImages(images.docs));
    //
    //
    // }, []);
    //
    // console.log('images', images)

    return (
        <div className="img-grid">

            {/*{images && images.map(image => (*/}
            {/*    <motion.div className="img-wrap" key={image.id}*/}
            {/*                layout*/}
            {/*                whileHover={{ opacity: 1 }}*/}
            {/*                onClick={() => setSelectedImg(image.url)}*/}
            {/*    >*/}

            {/*        /!*{!doc.url && <Spinner /> }*!/*/}

            {/*        <motion.img src={image.url} alt="uploaded pic"*/}
            {/*                    initial={{ opacity: 0 }}*/}
            {/*                    animate={{ opacity: 1 }}*/}
            {/*                    transition={{ delay: 1 }}*/}
            {/*        />*/}

            {/*        <div className="content">*/}
            {/*            <motion.p transition={{ delay: 2 }} >{image.name}</motion.p>*/}
            {/*        </div>*/}
            {/*    </motion.div>*/}
            {/*))}*/}

            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                            layout
                            whileHover={{ opacity: 1 }}
                            onClick={() => setSelectedImg(doc.url)}
                >

                    {/*{!doc.url && <Spinner /> }*/}

                    <motion.img src={doc.url} alt="uploaded pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                    />

                    <div className="content">
                        <motion.p transition={{ delay: 2 }} >{doc.name}</motion.p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
