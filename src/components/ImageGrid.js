import React from 'react';
import './ImageGrid.css';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import Spinner from "./Spinner";

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');


    return (
        <div className="img-grid">


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
