import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import "./UserPointInfo.css";
import Button from "react-bootstrap/Button";
import CreateChallenge from "./CreateChallenge";
import { useState } from "react";
import User from "models/UserModel";

const UserPointInfo = ({ user }) => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);

  const handleCreateClick = () => {
    // When the button is clicked, set showCreateDialog to true to show the dialog.
    setShowCreateDialog(true);
  };

  return (
    <Row>
      <Col>
        <div className="userInfo">
          <span>
            <FontAwesomeIcon icon={faUser} /> Hello, {user?.username}! You have{" "}
            <b>{user?.carbon_credits}</b> Points.
          </span>
          <span className="createSpan">
            <Button
              variant="primary"
              className="button"
              onClick={handleCreateClick}
            >
              Create Challenge
            </Button>
            {showCreateDialog && (
              <CreateChallenge
                show={showCreateDialog}
                onHide={() => setShowCreateDialog(false)}
              />
            )}
          </span>
        </div>
      </Col>
    </Row>
  );
};
export default UserPointInfo;
