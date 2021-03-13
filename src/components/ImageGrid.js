import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    console.log('docs', docs)

    return (
        <div className="img-grid">

            {/*{ docs && docs.map(doc => (*/}
            {/*    <div className="img-wrap" key={doc.id} onClick={() => setSelectedImg(doc.url)} >*/}
            {/*        <img src={doc.url} />*/}
            {/*    </div>*/}
            {/*)) }*/}

            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                            layout
                            whileHover={{ opacity: 1 }}
                            onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                    />
                    <div className="content">
                        <motion.p transition={{ delay: 2 }} >Lorem ipsum...</motion.p>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;
