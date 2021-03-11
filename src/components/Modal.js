import './Modal.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => (
  <div className="backDrop">
    <div className="wrapper">
      {children}
    </div>
  </div>
);
