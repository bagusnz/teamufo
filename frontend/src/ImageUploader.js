import React, { useState } from 'react';
import { uploadImage } from 'services/uploadService';

function ImageUploader({ onImageUpload }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);

        if (onImageUpload) {
            // Upload the selected image to Cloud Storage
            uploadImage(file, 'images/').then((downloadURL) => {
                onImageUpload(downloadURL);
            });
        }
    };

    const uploadImageNow = () => {
        // Upload the selected image to Cloud Storage
        uploadImage(selectedImage, 'images/'+selectedImage.name).then((downloadURL) => {
            console.log("image is available at "+downloadURL)
        });
    }

    return (
        <div>
            <input
                type="file"
                onChange={handleImageChange}
            />
            <button onClick={() => uploadImageNow()}>upload</button>
            {selectedImage && <p>Selected Image: {selectedImage.name}</p>}
        </div>
    );
}

export default ImageUploader;
