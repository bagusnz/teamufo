import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CreateChallenge = ({ show, onHide }) => {
  const [challenge, setChallenge] = useState({
    title: "",
    description: "",
    carbon_footprint_reduction: 0,
    category: "",
    created_by_user_id: null,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChallenge({ ...challenge, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setChallenge({ ...challenge, image: imageFile });
  };

  const handleSubmit = () => {
    // Handle the submission of the challenge data (e.g., send it to a server).
    // You can use API calls or state management libraries for this.
    // After submission, you can close the dialog.
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
            <label htmlFor="carbon_footprint_reduction" className="form-label">
              Carbon Footprint Reduction (CO2 equivalent units)
            </label>
            <input
              type="number"
              className="form-control"
              id="carbon_footprint_reduction"
              name="carbon_footprint_reduction"
              value={challenge.carbon_footprint_reduction}
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
        <Button variant="primary" onClick={handleSubmit}>
          Create Challenge
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateChallenge;
