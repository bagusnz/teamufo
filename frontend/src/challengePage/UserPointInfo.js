import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import "./UserPointInfo.css";
import Button from "react-bootstrap/Button";
import CreateChallenge from "./CreateChallenge";
import { useState } from "react";

const UserPointInfo = ({ users }) => {
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
            <FontAwesomeIcon icon={faUser} /> Hello, {users[0].name}!
          </span>
          <span className="pointSpan">{users[0].points} Points</span>
        </div>

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
      </Col>
    </Row>
  );
};
export default UserPointInfo;
