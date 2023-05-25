import Author from "../Author/Author";
import "../Author-N-Social/AuthorNsocial.css";
import SocialFollow from "../SocialFollow/SocialFollow";

const AuthorNsocial = (props) => {
  return (
    <div className="avatar-n-social">
      <Author author={props.author} avatar={props.avatar} />
      <div className="social-links">
        <SocialFollow instagram={props.instagram}/>
      </div>
    </div>
  );
};

export default AuthorNsocial;
