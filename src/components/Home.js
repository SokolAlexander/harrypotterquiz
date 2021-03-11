import Modal from "./Modal";
import { Link } from "react-router-dom";

import './Home.css';
import { startContinuousArtyom } from "../speech/artyom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Modal>
    <span className="text">
      Нажми "Start" и разреши использование микрофона
    </span>
    <div onClick={startContinuousArtyom}>
      <Link to="/start">Start</Link>
    </div>
  </Modal>
);