import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { createChallenge } from "services/crud/ChallengeCRUD";
import { uploadImage } from "services/uploadService";
import { generateRandomId } from "services/helper";
import { useUser } from "services/userContext";

const CreateChallenge = ({ show, onHide }) => {
  const user = useUser()

  const [image, setImage] = useState(null)
  const [challenge, setChallenge] = useState({
    challenge_id: generateRandomId(),
    title: "",
    description: "",
    carbon_credits: 0,
    category: "",
    created_by_user_email: user.email || null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChallenge({ ...challenge, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setImage(imageFile)
  };

  const handleSubmit = async () => {
    // Handle the submission of the challenge data (e.g., send it to a server).
    // You can use API calls or state management libraries for this.
    // After submission, you can close the dialog.
    image && await uploadImage(image, image.name)
    await createChallenge(challenge);
    alert('Challenge created successfully!');
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Challenge</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={challenge.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image (Optional)
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*" // Limit to image files
              onChange={handleImageChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={challenge.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="carbon_credits" className="form-label">
              Carbon Footprint Reduction (CO2 equivalent units)
            </label>
            <input
              type="number"
              className="form-control"
              id="carbon_credits"
              name="carbon_credits"
              value={challenge.carbon_credits}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={challenge.category}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Create Challenge
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateChallenge;
