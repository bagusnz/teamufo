import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import './UserPointInfo.css'

const UserPointInfo = ({users}) => {
    return (
       <Row>
           <Col>
               <div  className="userInfo">
                   <span><FontAwesomeIcon icon={faUser} /> Hello, {users[0].name}!</span>
                   <span className="pointSpan">{users[0].points} Points</span>
               </div>

               </Col>

       </Row>
);
}
export default UserPointInfo;