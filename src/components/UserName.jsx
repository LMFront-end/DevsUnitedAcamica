import "./styles/UserName.scss";

const UserName = ({
  content = "username",
  className = "",
  color = "#F50D5A",
}) => {
  return (
    <div className={`UserName ${className}`} style={{ backgroundColor: color }}>
      <h2>{content}</h2>
      <div className="Username_pixel"></div>
    </div>
  );
};

export { UserName };
