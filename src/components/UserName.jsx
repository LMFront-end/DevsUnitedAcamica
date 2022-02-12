import "./styles/UserName.scss";

const UserName = ({ content = "username", className = "" }) => {
  return (
    <div className={`UserName ${className}`}>
      <h2>{content}</h2>
      <div className="Username_pixel"></div>
    </div>
  );
};

export { UserName };
