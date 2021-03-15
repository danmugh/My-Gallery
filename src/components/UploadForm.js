import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";
import { MdAddAPhoto } from 'react-icons/md';
import { motion } from 'framer-motion';


const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('')
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }

    return (
        <form>
            <motion.label
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <input
                    type="file"
                    onChange={changeHandler}
                />
                <MdAddAPhoto className="icon" />

            </motion.label>
            <div className="output" >
                { error && <div className="error">{ error }</div> }
                { file && <div>{ file.name }</div> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>

        </form>
    );
};

export default UploadForm;
