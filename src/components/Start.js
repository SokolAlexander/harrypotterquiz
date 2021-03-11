import { Link } from 'react-router-dom';

import Modal from "./Modal";
import './Start.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div id="hiddenModalStart" className="hidden">
    <Modal>
      <span className="text">Добро пожаловать!</span>
      <Link to="/quest/harry">Вперед!</Link>
    </Modal>
  </div>
);
