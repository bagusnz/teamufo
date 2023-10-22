import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import "./UserPointInfo.css";

const UserPointInfoForRewards = ({ user }) => {
  return (
    <Row>
      <Col>
        <div className="userInfo">
          {
            user ?
            <span>
              <FontAwesomeIcon icon={faUser} /> Hello, {user?.username}! You have{" "}
              <b>{user?.carbon_credits}</b> Points.
            </span> :
            <span>Hello there, please log in to get your rewards.</span> 
          }
        </div>
      </Col>
    </Row>
  );
};
export default UserPointInfoForRewards;
