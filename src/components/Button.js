import './Button.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ label, onClick, className }) => (
  <div className={`button ${className}`} onClick={onClick}>
    <span className="buttonText">{label}</span>
  </div>
)