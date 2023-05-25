import "../Author/Author.css";
import Avatar from "@mui/material/Avatar";

const Author = ({author, avatar}) => {
  return (
    <div className="avatar">
      <Avatar
        className="avatar-image"
        alt={author}
        src={avatar}
        sx={{ width: 52, height: 52 }}
      />
      <div className="avatar-info">
        <span className="author">{ author }</span>
        <span className="date">Aug 17, 2019 - 10min read</span>
      </div>
    </div>
  );
};

export default Author;
